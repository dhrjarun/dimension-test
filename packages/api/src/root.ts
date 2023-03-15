import { resetDb, seedAll } from '@dimension/db';
import { createTRPCRouter, publicProcedure } from './trpc';
import { userRouter } from './modules/user';
import { projectRouter } from './modules/project';
import { issueRouter } from './modules/issue';
import { stageRouter } from './modules/stage';

export const appRouter = createTRPCRouter({
  hello: publicProcedure.query(({ ctx }) => {
    const { session } = ctx;

    if (session?.user) return `Hello user(id: ${session.user.id})`;
    return 'Hello';
  }),
  project: projectRouter,
  stage: stageRouter,
  user: userRouter,
  issue: issueRouter,

  resetDb: publicProcedure.mutation(async () => {
    await resetDb();
    await seedAll();
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
