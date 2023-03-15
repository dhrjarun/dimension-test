import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../../trpc';

export const stageRouter = createTRPCRouter({
  getAllByProjectId: publicProcedure
    .input(
      z.object({
        projectId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { prisma } = ctx;
      const { projectId } = input;

      const rawStages = await prisma.stage.findMany({ where: { projectId } });
      return rawStages;
    }),

  getById: publicProcedure.input(z.number()).query(({ ctx, input }) => {
    const { prisma } = ctx;

    return prisma.stage.findUnique({ where: { id: input } });
  }),
});

export type StageRouterInputs = inferRouterInputs<typeof stageRouter>;
export type StageRouterOutputs = inferRouterOutputs<typeof stageRouter>;
