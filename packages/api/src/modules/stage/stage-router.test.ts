import { describe, it } from 'vitest';
import { prisma } from '@dimension/db';
import { stages as data } from '@dimension/db/data/';
import { stageRouter } from './stage-router';

describe('api/stageRouter', () => {
  it('getAll', async () => {
    const result = await stageRouter
      .createCaller({ prisma, session: null })
      .getAllByProjectId({ projectId: 1 });

    expect(result.length).toBe(data.length);

    result.forEach((stage, index) => {
      expect(stage).toMatchObject(data[index] as any);
    });
  });
});
