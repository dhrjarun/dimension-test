import { LexoRank } from 'lexorank';
import { TRPCError } from '@trpc/server';
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

      const issues = await prisma.issue.findMany({
        where: { projectId },
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

  changeRank: publicProcedure
    .input(
      z.object({
        issueId: z.number(),
        newStageId: z.number().optional(),
        after: z.string().optional(),
        before: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx;
      const { issueId, newStageId, after, before } = input;

      // after will be prioritized over before
      const firstIssueRank = after ?? before;

      let newRank = '';

      if (!after && !before) throw new TRPCError({ code: 'BAD_REQUEST' });

      const issue = await prisma.issue.findUnique({ where: { id: issueId } });
      if (!issue) throw new TRPCError({ code: 'NOT_FOUND' });

      const firstIssue = await prisma.issue.findFirst({
        where: { rank: firstIssueRank, stageId: newStageId },
      });
      if (!firstIssue) throw new TRPCError({ code: 'NOT_FOUND' });

      const secondIssue = await prisma.issue.findFirst({
        where: { stageId: newStageId },
        cursor: { rank: firstIssue.rank },
        orderBy: { rank: after ? 'asc' : 'desc' }, // asc for after and desc for before
        skip: 1,
      });

      if (secondIssue) {
        newRank = LexoRank.parse(firstIssue.rank)
          .between(LexoRank.parse(secondIssue.rank))
          .toString();
      } else {
        const parsed = LexoRank.parse(firstIssue.rank);
        newRank = after ? parsed.genNext().toString() : parsed.genPrev().toString(); // next for after and prev for before
      }

      await prisma.issue.update({
        data: { rank: newRank, stageId: newStageId },
        where: { id: issueId },
      });
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
