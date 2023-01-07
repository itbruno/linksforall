import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <div className={inter.className}>Hello Linksforall</div>;
}
