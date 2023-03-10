import { describe, it } from 'vitest';
import { prisma } from '@dimension/db';
import { projects as data } from '@dimension/db/data/';
import { projectRouter } from './project-router';

describe('api/projectRouter', () => {
  it('getAll', async () => {
    const result = await projectRouter.createCaller({ prisma, session: null }).getAll();

    expect(result.length).toBe(data.length);

    result.forEach((project, index) => {
      expect(project).toMatchObject(data[index] as any);
    });
  });
});
