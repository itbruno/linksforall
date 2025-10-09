import '@assets/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { AppProps } from 'next/app';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <Toaster />
    </QueryClientProvider>
  );
}
