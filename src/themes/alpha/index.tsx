import DataProps from '@interfaces/data';
import { Header } from './components/Header';
import { Montserrat } from '@next/font/google';
import { ListingWrapper } from './components/ListingWrapper';

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
    </main>
  );
}

export { Alpha };
