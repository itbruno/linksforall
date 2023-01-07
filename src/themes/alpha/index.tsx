import DataProps from '@interfaces/data';
import { Header } from './components/Header';
import { Montserrat } from '@next/font/google';

const themeFont = Montserrat();
interface AlphaProps {
  data: DataProps;
}

function Alpha({ data }: AlphaProps) {
  const { user } = data;
  return (
    <main className={`${themeFont.className} antialiased`}>
      <Header fullname={user.fullname} role={user.role} image={user.image} />
    </main>
  );
}

export { Alpha };
