import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../../trpc';

export const commentRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        issueId: z.number(),
        body: z.string().min(1).max(2000),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;

      // TODO: sanitize body
      const { issueId, body } = input;

      const comment = await prisma.comment.create({
        data: {
          issueId,
          body,
          authorId: session.user.id,
        },
      });

      await prisma.issueParticipants.create({
        data: {
          issueId,
          userId: session.user.id,
        },
      });

      return comment;
    }),
});
