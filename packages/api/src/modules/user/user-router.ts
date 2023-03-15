import { TRPCError, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { createTRPCRouter, protectedProcedure } from '../../trpc';

export const userRouter = createTRPCRouter({
  getMe: protectedProcedure.query(async ({ ctx }) => {
    const { prisma, session } = ctx;

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) throw new TRPCError({ code: 'BAD_REQUEST' });

    const { id, name, username, email, avatarUrl, createdAt } = user;
    return { id, name, username, email, avatarUrl, createdAt };
  }),
});

export type UserRouterInputs = inferRouterInputs<typeof userRouter>;
export type UserRouterOutputs = inferRouterOutputs<typeof userRouter>;
