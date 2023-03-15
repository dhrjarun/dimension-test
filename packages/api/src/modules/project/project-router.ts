import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { createTRPCRouter, publicProcedure } from '../../trpc';

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    const { prisma } = ctx;

    return prisma.project.findMany();
  }),
});

export type ProjectRouterOutputs = inferRouterOutputs<typeof projectRouter>;
export type ProjectRouterInputs = inferRouterInputs<typeof projectRouter>;
