import DataProps from '@interfaces/data';
import { Header } from './components/Header';
import { Montserrat } from 'next/font/google';
import { ListingWrapper } from './components/ListingWrapper';
import React from 'react';

const themeFont = Montserrat({ subsets: ['latin'] });
interface DraculaProps {
  data: DataProps;
  children?: React.ReactNode;
}

function Dracula({ data, children }: DraculaProps) {
  const { user, categories, links } = data;
  return (
    <main
      data-theme="dark"
      className={`${themeFont.className} min-h-screen bg-dracula-background antialiased pb-10`}
    >
      <Header
        fullname={user.fullname}
        role={user.role}
        socialLinks={user.socialLinks}
        image={user.image}
      />
      <ListingWrapper categories={categories} links={links} />
      {children}
    </main>
  );
}

export { Dracula };
