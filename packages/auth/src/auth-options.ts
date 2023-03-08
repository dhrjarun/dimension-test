/* eslint-disable no-param-reassign */
import { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@dimension/db';

declare module 'next-auth' {
  interface User {
    id: number;
    email: string;
    username: string;
    name?: string | null;
    avatarUrl?: string | null;
  }

  interface Session {
    user?: User;
    expires: string;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id: number;
    email: string;
    username: string;
    name?: string | null;
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
          const { id, email, username, name, avatarUrl } = user;
          return { id, email, username, name, avatarUrl };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user?.id as number;
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
