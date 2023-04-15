import '../styles/globals.css';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import { WagmiConfig } from 'wagmi';

import 'react-toastify/dist/ReactToastify.css';
import '@rainbow-me/rainbowkit/styles.css';

import { chains, wagmiClient } from '@/src/config/rainbow';

import { mantletestnet } from '../config/chain';

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
            <RainbowKitProvider chains={chains} initialChain={mantletestnet}>
              <ToastContainer />
              <Component {...pageProps} />
            </RainbowKitProvider>
          </WagmiConfig>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
