import Head from 'next/head';
import UserProps from '@interfaces/user';
import User from '@lib/user.json';

import { Alpha } from '@themes/alpha';

export default function Home() {
  const userinfo: UserProps = User;
  return (
    <>
      <Head>
        <title>
          {userinfo.fullname} - {userinfo.role}
        </title>
        <meta name="description" content={userinfo.bio} />
      </Head>
      <Alpha />
    </>
  );
}
