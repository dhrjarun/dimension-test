import React from 'react';
import type { AppType } from 'next/app';
import { trpc } from '~/utils/api';
import '~/styles/globals.css';

const App = function ({ Component, pageProps }) {
  return <Component {...pageProps} />;
} as AppType;

export default trpc.withTRPC(App);
