import Head from 'next/head';

import { Alpha } from '@themes/alpha';
import { DATA } from '@lib/data';
import { GA4 } from '@utils/ga4';
import { ContactFormBlock } from '@blocks/ContactFormBlock';

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

        <meta name="robots" content="index,follow" />

        <meta property="og:title" content={user.fullname} />
        <meta property="og:description" content={user.bio} />
        <meta property="og:type" content="website" />
      </Head>
      <Alpha data={DATA}>
        <div className="container max-w-lg px-4 flex flex-col gap-6 animate-slide-up">
          <ContactFormBlock />
        </div>
      </Alpha>
      {GA4ID && <GA4 ga4Id={GA4ID} />}
    </>
  );
}
