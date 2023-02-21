import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter, createTRPCContext } from '@dimension/api';

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
});
