import { createTRPCRouter, publicProcedure, protectedProcedure } from './trpc';

export const appRouter = createTRPCRouter({
  hello: publicProcedure.query(({ ctx }) => {
    const { session } = ctx;

    console.log('the server session', session);
    if (session?.user) return `Hello user(id: ${session.user.id})`;
    return 'Hello';
  }),
  helloP: protectedProcedure.query(({ ctx }) => {
    const { session } = ctx;

    return `Hello user(id: ${session.user.id})`;
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
