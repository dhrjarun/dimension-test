import { createTRPCRouter, publicProcedure } from './trpc';

export const appRouter = createTRPCRouter({
  hello: publicProcedure.query(() => 'Hello, world'),
});

// export type definition of API
export type AppRouter = typeof appRouter;
