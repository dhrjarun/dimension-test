import { createTRPCRouter, publicProcedure } from '../../trpc';

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    const { prisma } = ctx;

    return prisma.project.findMany();
  }),
});
