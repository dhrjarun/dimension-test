import { TRPCError, inferAsyncReturnType, initTRPC } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import superjson from 'superjson';
import { ZodError } from 'zod';
import { prisma } from '@dimension/db';
import { getServerSession, type Session } from '@dimension/auth';

// context
interface CreateInnerContextOptions extends Partial<CreateNextContextOptions> {
  session: Session | null;
}

async function createContextInner(opts: CreateInnerContextOptions) {
  return { prisma, session: opts.session };
}

export type InnerContext = inferAsyncReturnType<typeof createContextInner>;

export interface Context extends InnerContext {
  req?: CreateNextContextOptions['req'];
  res?: CreateNextContextOptions['res'];
}

export const createTRPCContext: (opts: CreateNextContextOptions) => Promise<Context> = async (
  opts
) => {
  const { req, res } = opts;
  const session = await getServerSession({ req, res });

  const contextInner = await createContextInner({ session });

  return { ...contextInner, req: opts.req, res: opts.res };
};

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

/**
 * Reusable middleware that enforces users are logged in before running the
 * procedure
 */
const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  const user = ctx?.session?.user;

  const isAuthed = user && user?.id;

  if (!isAuthed) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user },
    },
  });
});

/**
 * Protected (authed) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use
 * this. It verifies the session is valid and guarantees ctx.session.user is not
 * null
 *
 * @see https://trpc.io/docs/procedures
 */
export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
