import React, { useEffect, useState } from 'react';
import { trpcClient } from '~/utils/api';

export default function Home() {
  const [message, setMessage] = useState<undefined | string>(undefined);

  useEffect(() => {
    trpcClient.hello.query().then((res) => setMessage(res));
  }, []);

  return (
    <>
      <h1 className="text-lg text-cyan-500 font-bold m-6">Home</h1>
      {message ? <p>The message: {message}</p> : <p>Loading...</p>}
    </>
  );
}
