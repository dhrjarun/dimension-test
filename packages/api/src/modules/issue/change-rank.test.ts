import { describe, it } from 'vitest';
import { prisma } from '@dimension/db';
import { issues as issueData } from '@dimension/db/data/';
import { issueRouter } from './issue-router';

const caller = issueRouter.createCaller({ prisma, session: null });

describe('api/projectRouter/changeRank', async () => {
  const testProject = await prisma.project.create({
    data: {
      name: 'test-1-project',
      url: 'https://dimension.dev/projects/test-1-project',
      logoUrl: '/images/project/app-circle.png',
    },
  });

  const stageI = await prisma.stage.create({
    data: {
      title: 'Stage1',
      rank: '1',
      projectId: testProject.id,
      imageUrl: '/images/test-stage-1.jpg',
      color: 'black',
    },
  });

  const ranks = ['0|hzzzzz:', '0|i00007:', '0|i0000f:', '0|i0000n:', '0|i0000v:', '0|i00013:'];

  const issueI = await prisma.issue.create({
    data: {
      number: 1,
      title: 'test-issue-1',
      stageId: stageI.id,
      authorId: 1,
      projectId: testProject.id,
      rank: ranks[0] as string,
    },
  });
  const issueII = await prisma.issue.create({
    data: {
      number: 2,
      title: 'test-issue-2',
      stageId: stageI.id,
      authorId: 1,
      projectId: testProject.id,
      rank: ranks[1] as string,
    },
  });
  const issueIII = await prisma.issue.create({
    data: {
      number: 3,
      title: 'test-issue-3',
      stageId: stageI.id,
      authorId: 1,
      projectId: testProject.id,
      rank: ranks[2] as string,
    },
  });
  const issueIV = await prisma.issue.create({
    data: {
      number: 4,
      title: 'test-issue-4',
      stageId: stageI.id,
      authorId: 1,
      projectId: testProject.id,
      rank: ranks[3] as string,
    },
  });

  const issueV = await prisma.issue.create({
    data: {
      number: 5,
      title: 'test-issue-5',
      stageId: stageI.id,
      authorId: 1,
      projectId: testProject.id,
      rank: ranks[4] as string,
    },
  });

  const issueVI = await prisma.issue.create({
    data: {
      number: 6,
      title: 'test-issue-6',
      stageId: stageI.id,
      authorId: 1,
      projectId: testProject.id,
      rank: ranks[5] as string,
    },
  });

  async function getOrder(stageId: number) {
    const order = await prisma.issue
      .findMany({
        where: { stageId },
        select: { rank: true, id: true, number: true },
        orderBy: { rank: 'asc' },
      })
      .then((list) => list.map((issue) => issue.id));
    return order;
  }

  const initialOrder = [issueI.id, issueII.id, issueIII.id, issueIV.id, issueV.id, issueVI.id];

  it('should have correct order', async () => {
    const order = await getOrder(stageI.id);
    expect(order).toEqual(initialOrder);
  });

  it('throws error if trying to change position to different project', async () => {
    const before = issueData[5].id;
    const after = issueData[2].id;

    caller.changeRank({ issueId: issueI.id, before }).catch((err) => {
      expect(err.message).toBe('BAD_REQUEST');
    });

    caller.changeRank({ issueId: issueI.id, after }).catch((err) => {
      expect(err.message).toBe('BAD_REQUEST');
    });
  });

  it('changes the position of issueI from first to last', async () => {
    await caller.changeRank({ issueId: issueI.id, after: issueVI.id });

    const newOrder = await getOrder(stageI.id);
    expect(newOrder).toEqual([
      issueII.id,
      issueIII.id,
      issueIV.id,
      issueV.id,
      issueVI.id,
      issueI.id,
    ]);
  });

  it('changes the position of issueI from last to first', async () => {
    await caller.changeRank({ issueId: issueI.id, before: issueII.id });

    const newOrder = await getOrder(stageI.id);
    expect(newOrder).toEqual([
      issueI.id,
      issueII.id,
      issueIII.id,
      issueIV.id,
      issueV.id,
      issueVI.id,
    ]);
  });

  it('changes the position of issueIII', async () => {
    await caller.changeRank({ issueId: issueIII.id, before: issueII.id });

    const newOrder = await getOrder(stageI.id);
    expect(newOrder).toEqual([
      issueI.id,
      issueIII.id,
      issueII.id,
      issueIV.id,
      issueV.id,
      issueVI.id,
    ]);
  });

  const stageII = await prisma.stage.create({
    data: {
      title: 'State 2',
      rank: '2',
      projectId: testProject.id,
      imageUrl: '/images/test-stage-2.jpg',
      color: 'blue',
    },
  });

  // when 0 issues in stage
  it('changes the position of issueII from stageI to stageII', async () => {
    await caller.changeRank({ issueId: issueII.id, newStageId: stageII.id });

    const newOrderI = await getOrder(stageI.id);
    expect(newOrderI).toEqual([issueI.id, issueIII.id, issueIV.id, issueV.id, issueVI.id]);

    const newOrderII = await getOrder(stageII.id);
    expect(newOrderII).toEqual([issueII.id]);
  });

  const stageIII = await prisma.stage.create({
    data: {
      title: 'State 3',
      rank: '3',
      projectId: testProject.id,
      imageUrl: '/images/test-stage-3.jpg',
      color: 'green',
    },
  });

  it('distribute issues in stages', async () => {
    await caller.changeRank({ issueId: issueI.id, after: issueII.id });
    await caller.changeRank({ issueId: issueIV.id, newStageId: stageIII.id });
    await caller.changeRank({ issueId: issueVI.id, before: issueIV.id });

    const newOrderI = await getOrder(stageI.id);
    expect(newOrderI).toEqual([issueIII.id, issueV.id]);

    const newOrderII = await getOrder(stageII.id);
    expect(newOrderII).toEqual([issueII.id, issueI.id]);

    const newOrderIII = await getOrder(stageIII.id);
    expect(newOrderIII).toEqual([issueVI.id, issueIV.id]);
  });

  it('puts all issues in stageI', async () => {
    await caller.changeRank({ issueId: issueII.id, before: issueIII.id });
    await caller.changeRank({ issueId: issueI.id, before: issueII.id });

    await caller.changeRank({ issueId: issueVI.id, after: issueV.id });
    await caller.changeRank({ issueId: issueIV.id, after: issueIII.id });

    const newOrderI = await getOrder(stageI.id);
    expect(newOrderI).toEqual([
      issueI.id,
      issueII.id,
      issueIII.id,
      issueIV.id,
      issueV.id,
      issueVI.id,
    ]);

    const newOrderII = await getOrder(stageII.id);
    expect(newOrderII).toEqual([]);

    const newOrderIII = await getOrder(stageIII.id);
    expect(newOrderIII).toEqual([]);
  });

  it('puts all issues in stageIII', async () => {
    await caller.changeRank({ issueId: issueII.id, newStageId: stageIII.id });
    await caller.changeRank({ issueId: issueIV.id, after: issueII.id });
    await caller.changeRank({ issueId: issueI.id, before: issueII.id });
    await caller.changeRank({ issueId: issueIII.id, after: issueII.id });
    await caller.changeRank({ issueId: issueV.id, after: issueIV.id });
    await caller.changeRank({ issueId: issueVI.id, after: issueV.id });

    const newOrderI = await getOrder(stageI.id);
    expect(newOrderI).toEqual([]);

    const newOrderII = await getOrder(stageII.id);
    expect(newOrderII).toEqual([]);

    const newOrderIII = await getOrder(stageIII.id);

    expect(newOrderIII).toEqual([
      issueI.id,
      issueII.id,
      issueIII.id,
      issueIV.id,
      issueV.id,
      issueVI.id,
    ]);
  });

  it('puts all issues in stageII', async () => {
    await caller.changeRank({ issueId: issueI.id, newStageId: stageII.id });
    await caller.changeRank({ issueId: issueIII.id, after: issueI.id });
    await caller.changeRank({ issueId: issueV.id, after: issueIII.id });
    await caller.changeRank({ issueId: issueVI.id, after: issueV.id });
    await caller.changeRank({ issueId: issueII.id, before: issueIII.id });
    await caller.changeRank({ issueId: issueIV.id, after: issueIII.id });

    const newOrderI = await getOrder(stageI.id);
    expect(newOrderI).toEqual([]);

    const newOrderII = await getOrder(stageII.id);
    expect(newOrderII).toEqual([
      issueI.id,
      issueII.id,
      issueIII.id,
      issueIV.id,
      issueV.id,
      issueVI.id,
    ]);

    const newOrderIII = await getOrder(stageIII.id);
    expect(newOrderIII).toEqual([]);
  });

  afterAll(async () => {
    await prisma.issue.deleteMany({ where: { projectId: testProject.id } });
    await prisma.stage.deleteMany({ where: { projectId: testProject.id } });
    await prisma.project.delete({ where: { id: testProject.id } });
  });
});
