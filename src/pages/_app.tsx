import '../styles/globals.css';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { WagmiConfig } from 'wagmi';

import '@rainbow-me/rainbowkit/styles.css';

import { chains, wagmiClient } from '@/src/config/rainbow';

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 1,
      staleTime: 1000 * 5,
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={PoppinsFont.className}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
              <Component {...pageProps} />
            </RainbowKitProvider>
          </WagmiConfig>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
