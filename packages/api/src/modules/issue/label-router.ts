import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { createTRPCRouter, publicProcedure } from '../../trpc';

export const labelRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        color: z.string(),
        projectId: z.number(),
        info: z.string().max(100),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx;

      const { name, color, projectId, info } = input;

      const pCount = await prisma.project.count({ where: { id: projectId } });
      if (pCount < 1) {
        throw new TRPCError({ code: 'BAD_REQUEST' });
      }

      const label = await prisma.label.create({
        data: { name, color, info, projectId },
      });

      return {
        id: label.id,
        name: label.name,
        info: label.info,
      };
    }),
});
