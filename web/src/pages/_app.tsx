import React from 'react';
import type { Session } from 'next-auth';
import { getSession, SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';
import type { AppType, AppProps } from 'next/app';
import { trpc, trpcClient } from '~/utils/api';
import '~/styles/globals.css';

const App: AppType<{ session: Session | null }> = function (props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <Component {...pageProps} />
        <div className="fixed bottom-3 right-4">
          <button
            className="underline"
            onClick={async () => {
              // eslint-disable-next-line no-alert
              const cnf = window.confirm('Do you want to Reset the DB?');
              if (cnf) {
                await trpcClient.resetDb
                  .mutate()
                  .then(() => {
                    window.location.reload();
                  })
                  .catch();
              }
            }}
          >
            Reset DB
          </button>
        </div>
      </RecoilRoot>
    </SessionProvider>
  );
};

App.getInitialProps = async ({ ctx }) => ({
  session: await getSession(ctx),
});

export default trpc.withTRPC(App);
