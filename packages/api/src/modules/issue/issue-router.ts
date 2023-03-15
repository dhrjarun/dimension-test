import { LexoRank } from 'lexorank';
import { TRPCError, inferRouterOutputs, inferRouterInputs } from '@trpc/server';
import z from 'zod';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../../trpc';
import { issuesCountDataQuery } from './issue-query';

export const issueRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().max(100).min(1),
        description: z.string().max(2000),
        projectId: z.number(),
        stageId: z.number(),
        authorId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;

      // TODO: sanitize description and title
      const { title, description, projectId, stageId } = input;

      const projectCount = await prisma.project.count({ where: { id: projectId } });
      const stageCount = await prisma.stage.count({ where: { id: stageId } });

      if (projectCount < 1 || stageCount < 1) {
        throw new TRPCError({ code: 'BAD_REQUEST' });
      }

      const lastIssue = await prisma.issue.findFirst({
        where: { projectId },
        select: { rank: true, number: true },
        orderBy: { rank: 'desc' },
      });

      // TODO: create own implementation of LexoRank algorithm
      const rank = lastIssue
        ? LexoRank.parse(lastIssue.rank).genNext().toString()
        : LexoRank.min().toString();

      const number = lastIssue ? lastIssue.number + 1 : 1;

      const issue = await prisma.issue.create({
        data: {
          number,
          title,
          description,
          projectId,
          stageId,
          authorId: session.user.id,
          rank,
        },
      });

      await prisma.issueParticipants.create({
        data: {
          issue: { connect: { number } },
          user: { connect: { id: session.user.id } },
          role: 'CREATOR',
        },
      });

      return issue;
    }),

  getAllByStageId: publicProcedure
    .input(
      z.object({
        stageId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { prisma } = ctx;
      const { stageId } = input;

      const issues = await prisma.issue.findMany({
        where: { stageId },
        include: {
          participants: { select: { id: true, user: { select: { id: true, avatarUrl: true } } } },
        },
        orderBy: { rank: 'asc' },
      });

      const issueIds = issues.map((issue) => issue.id);
      const counts = await issuesCountDataQuery({ issueIds });

      const data = issues.map((issue, index) => {
        const countData = counts[index];
        return {
          ...issue,
          commentCount: Number(countData?.commentCount),
          taskCount: Number(countData?.taskCount),
          taskCompletedCount: Number(countData?.taskCompletedCount),
        };
      });

      return data;
    }),

  getAllByProjectId: publicProcedure
    .input(
      z.object({
        projectId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { prisma } = ctx;
      const { projectId } = input;

      const rawIssues = await prisma.issue.findMany({
        where: { projectId },
        include: {
          participants: {
            select: { id: true, user: { select: { id: true, name: true, avatarUrl: true } } },
          },
          labels: {
            select: { id: true, label: { select: { id: true, name: true, color: true } } },
          },
        },
        orderBy: { rank: 'asc' },
      });

      const issueIds = rawIssues.map((issue) => issue.id);
      const counts = await issuesCountDataQuery({ issueIds });

      const issues = rawIssues.map((issue, index) => {
        const countData = counts[index];

        return {
          ...issue,
          commentCount: Number(countData?.commentCount),
          taskCount: Number(countData?.taskCount),
          taskCompletedCount: Number(countData?.taskCompletedCount),
          labels: issue.labels.map((label) => label.label),
          participants: issue.participants.map((participant) => participant.user),
        };
      });

      return issues;
    }),

  getById: publicProcedure
    .input(
      z.object({
        issueId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { prisma } = ctx;
      const { issueId } = input;

      const issue = await prisma.issue.findUnique({
        where: { id: issueId },
        include: { author: true, comments: true, tasks: true },
      });

      if (!issue) throw new TRPCError({ code: 'NOT_FOUND' });

      const { id, number, title, description, rank, author, comments, tasks } = issue;

      return {
        id,
        number,
        title,
        description,
        rank,
        author,
        comments,
        tasks,
      };
    }),

  /**
   * Change issue rank
   * @param issueId - id of issue whose rank will be changed
   * @param after - id of issue after which issue will be moved
   * @param before - id of issue before which issue will be moved. If after is provided, before will be ignored
   * @param newStageId - if there is no issues in the stage, provide newStageId. If it is provided with before or after - it will checked if it matches with stageId of before or after
   *
   */
  changeRank: publicProcedure
    .input(
      z.object({
        issueId: z.number(),
        newStageId: z.number().optional(),
        after: z.number().optional(), // means put issue after this issue
        before: z.number().optional(), // means put issue before this issue
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx;
      const { issueId, newStageId, after, before } = input;

      // check if issue exist
      const issue = await prisma.issue.findUnique({ where: { id: issueId } });
      if (!issue) throw new TRPCError({ code: 'NOT_FOUND' });

      if (newStageId) {
        // check if newStageId exist and is in the same project
        const stage = await prisma.stage.findUnique({
          where: { id: newStageId },
          select: { id: true, projectId: true, _count: { select: { issues: true } } },
        });
        if (!stage) throw new TRPCError({ code: 'BAD_REQUEST' });
        if (stage.projectId !== issue.projectId) throw new TRPCError({ code: 'BAD_REQUEST' });

        // in case of 0 issue in the newStage
        // eslint-disable-next-line no-underscore-dangle
        if (stage._count.issues === 0) {
          const result = await prisma.issue.update({
            data: { stageId: newStageId },
            where: { id: issueId },
          });

          return result;
        }
      }

      // `after` will be prioritized over `before`
      const firstIssueId = after ?? before;
      if (!firstIssueId) throw new TRPCError({ code: 'BAD_REQUEST' });

      let newRank = '';

      const firstIssue = await prisma.issue.findFirst({
        where: { id: firstIssueId, projectId: issue.projectId },
        select: { id: true, rank: true, stageId: true },
      });

      if (!firstIssue) throw new TRPCError({ code: 'BAD_REQUEST' });
      // if newStageId is provided, check if it is the same as firstIssue's stageId
      if (newStageId && firstIssue.stageId !== newStageId)
        throw new TRPCError({ code: 'BAD_REQUEST' });

      const secondIssue = await prisma.issue.findFirst({
        where: { projectId: issue.projectId }, // secondIssue should be in the same project
        select: { id: true, rank: true },
        cursor: { rank_projectId: { rank: firstIssue.rank, projectId: issue.projectId } },
        orderBy: { rank: after ? 'asc' : 'desc' }, // asc for after and desc for before
        skip: 1,
      });

      if (secondIssue) {
        newRank = LexoRank.parse(firstIssue.rank)
          .between(LexoRank.parse(secondIssue.rank))
          .toString();
      } else {
        // in case of either very-first issue or very-last issue in the project
        const parsed = LexoRank.parse(firstIssue.rank);
        newRank = after ? parsed.genNext().toString() : parsed.genPrev().toString(); // next for after and prev for before
      }

      const result = await prisma.issue.update({
        data: { rank: newRank, stageId: firstIssue.stageId },
        where: { id: issueId },
      });

      return result;
    }),

  addLabel: protectedProcedure
    .input(z.object({ issueId: z.number(), labelId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      const { issueId, labelId } = input;

      const lCount = await prisma.label.count({ where: { id: labelId } });
      const iCount = await prisma.label.count({ where: { id: issueId } });

      if (lCount < 1 || iCount < 1) {
        throw new TRPCError({ code: 'BAD_REQUEST' });
      }

      prisma.labelOnIssue.create({ data: { labelId, issueId, assignedBy: session.user.id } });
    }),
});

export type IssueRouterInput = inferRouterInputs<typeof issueRouter>;
export type IssueRouterOutput = inferRouterOutputs<typeof issueRouter>;
