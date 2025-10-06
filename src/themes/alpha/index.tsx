import DataProps from '@interfaces/data';
import { Header } from './components/Header';
import { Montserrat } from 'next/font/google';
import { ListingWrapper } from './components/ListingWrapper';
import { ContactFormBlock } from '@blocks/ContactFormBlock';

const themeFont = Montserrat({ subsets: ['latin'] });
interface AlphaProps {
  data: DataProps;
}

function Alpha({ data }: AlphaProps) {
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
      <div className="container max-w-lg px-4 flex flex-col gap-6 animate-slide-up">
        <ContactFormBlock />
      </div>
    </main>
  );
}

export { Alpha };
