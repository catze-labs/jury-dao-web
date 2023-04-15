import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { mantletestnet } from './chain';

const { chains, provider } = configureChains(
  [mantletestnet],
  [publicProvider()],
);

const connectors = connectorsForWallets([
  {
    groupName: 'Supported',
    wallets: [metaMaskWallet({ chains }), walletConnectWallet({ chains })],
  },
]);

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

export { wagmiClient, chains };
