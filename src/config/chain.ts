import { Chain } from '@rainbow-me/rainbowkit';

export const mantletestnet: Chain = {
  id: 5001,
  name: 'Mantle Testnet',
  network: 'Mantle Testnet',
  iconUrl: 'https://i.imgur.com/Q3oIdip.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'BIT',
    symbol: 'BIT',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.mantle.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Mantle Testnet Explorer',
      url: 'https://explorer.testnet.mantle.xyz',
    },
  },
  testnet: true,
};
