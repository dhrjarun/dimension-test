import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../../trpc';

export const stageRouter = createTRPCRouter({
  getAllByProjectId: publicProcedure.input(z.number()).query(({ ctx, input }) => {
    const { prisma } = ctx;

    return prisma.stage.findMany({ where: { projectId: input } });
  }),

  getById: publicProcedure.input(z.number()).query(({ ctx, input }) => {
    const { prisma } = ctx;

    return prisma.stage.findUnique({ where: { id: input } });
  }),
});
