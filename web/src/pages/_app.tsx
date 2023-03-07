import React from 'react';
import type { Session } from 'next-auth';
import { getSession, SessionProvider } from 'next-auth/react';
import type { AppType, AppProps } from 'next/app';
import { trpc } from '~/utils/api';
import '~/styles/globals.css';

const App: AppType<{ session: Session | null }> = function (props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

App.getInitialProps = async ({ ctx }) => ({
  session: await getSession(ctx),
});

export default trpc.withTRPC(App);
