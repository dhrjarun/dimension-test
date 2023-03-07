import React from 'react';
import { trpc } from '~/utils/api';

export default function Home() {
  const msg = trpc.hello.useQuery();

  return (
    <>
      <h1 className="text-lg text-cyan-500 font-bold m-6">Home</h1>
      <p>The message: {msg.data}</p>
    </>
  );
}
