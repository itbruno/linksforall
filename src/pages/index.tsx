import Head from 'next/head';

import { Alpha } from '@themes/alpha';
import { DATA } from '@lib/data';
import { GA4 } from 'src/utils/ga4';

export default function Home() {
  const { user } = DATA;
  const GA4ID = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <>
      <Head>
        <title>{`${user.fullname} - ${user?.role}`}</title>
        <meta name="description" content={user.bio} />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </Head>
      <Alpha data={DATA} />
      {GA4ID && <GA4 ga4Id={GA4ID} />}
    </>
  );
}
