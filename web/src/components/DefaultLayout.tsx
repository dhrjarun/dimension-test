import React, { ReactNode } from 'react';
import Head from 'next/head';

type DefaultLayoutProps = { children: ReactNode };

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Head>
        <title>Prisma Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </>
  );
}
