import { describe, it } from 'vitest';
import { prisma } from '@dimension/db';
import {
  projects as projectData,
  stages as stageData,
  issueDataCountsMap,
} from '@dimension/db/data/';
import { issueRouter } from './issue-router';

const caller = issueRouter.createCaller({ prisma, session: null });
describe('api/projectRouter/', async () => {
  const project = projectData[0];
  const stage = stageData[0];

  it('should return correct counts in getAllByProjectId', async () => {
    const result = await caller.getAllByProjectId({ projectId: project.id });

    result.forEach((issue) => {
      const taskCount = issueDataCountsMap[`id-${issue.id}`]?.taskCount;
      const taskCompletedCount = issueDataCountsMap[`id-${issue.id}`]?.taskCompletedCount;
      const commentCount = issueDataCountsMap[`id-${issue.id}`]?.commentCount;

      expect(issue.taskCompletedCount).toBe(taskCompletedCount);
      expect(issue.taskCount).toBe(taskCount);
      expect(issue.commentCount).toBe(commentCount);
    });
  });

  it('should return correct counts in getAllByStageId', async () => {
    const result = await caller.getAllByStageId({ stageId: stage.id });

    result.forEach((issue) => {
      const taskCount = issueDataCountsMap[`id-${issue.id}`]?.taskCount;
      const taskCompletedCount = issueDataCountsMap[`id-${issue.id}`]?.taskCompletedCount;
      const commentCount = issueDataCountsMap[`id-${issue.id}`]?.commentCount;

      expect(issue.taskCompletedCount).toBe(taskCompletedCount);
      expect(issue.taskCount).toBe(taskCount);
      expect(issue.commentCount).toBe(commentCount);
    });
  });
});
