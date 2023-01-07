import Head from 'next/head';

import { Alpha } from '@themes/alpha';
import { DATA } from '@lib/data';

export default function Home() {
  const { user } = DATA;
  return (
    <>
      <Head>
        <title>
          {user.fullname} - {user?.role}
        </title>
        <meta name="description" content={user.bio} />
      </Head>
      <Alpha data={DATA} />
    </>
  );
}
