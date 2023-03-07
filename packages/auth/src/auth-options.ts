/* eslint-disable no-param-reassign */
import { type DefaultSession, type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@dimension/db';

// TODO: fix typescript issue
interface AuthUser {
  id?: number;
  name?: string | null;
  email?: string;
  username?: string;
  avatarUrl?: string | null;
}

declare module 'next-auth' {
  interface User extends AuthUser {}

  interface Session {
    user?: User;
    expires: DefaultSession['expires'];
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id: number;
    name?: string | null;
    email?: string;
    username?: string;
    avatarUrl?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Enter the username' },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        const user = await prisma.user.findUnique({ where: { username: credentials.username } });

        if (user) {
          const { id, name, email, username, avatarUrl } = user;
          return { id, name, email, username, avatarUrl };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id as unknown as number;
        token.username = user?.username;
        token.avatarUrl = user?.avatarUrl;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token?.id;
        session.user.username = token?.username;
        session.user.avatarUrl = token?.avatarUrl;
      }
      return session;
    },
  },
};
