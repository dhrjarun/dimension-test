import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { ZodError } from 'zod';

// import { prisma } from './prisma';

// context
type CreateContextOptions = {};

const createInnerTRPCContext = (opts: CreateContextOptions) => ({ ...opts });

export const createTRPCContext = async () => createInnerTRPCContext({});

// Initialization
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
