import DataProps from '@interfaces/data';
import { Header } from './components/Header';
import { Montserrat } from 'next/font/google';
import { ListingWrapper } from './components/ListingWrapper';
import { ContactFormBlock } from '@blocks/ContactFormBlock';
import React, { Children } from 'react';

const themeFont = Montserrat({ subsets: ['latin'] });
interface AlphaProps {
  data: DataProps;
  children?: React.ReactNode;
}

function Alpha({ data, children }: AlphaProps) {
  const { user, categories, links } = data;
  return (
    <main className={`${themeFont.className} antialiased`}>
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

export { Alpha };
