export { appRouter, type AppRouter } from './root';
export { createTRPCContext } from './trpc';

export type { IssueRouterInput, IssueRouterOutput } from './modules/issue';
export type { StageRouterInputs, StageRouterOutputs } from './modules/stage';
export type { UserRouterInputs, UserRouterOutputs } from './modules/user';
export type { ProjectRouterInputs, ProjectRouterOutputs } from './modules/project';
