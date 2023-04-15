import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';
import {
  ConnectorAlreadyConnectedError,
  UserRejectedRequestError,
  useConnect,
} from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

import Button from '@/src/components/Button';

interface ConnectWalletProps {
  onConnect?: (address: string) => void;
}

const errorHandler = (error: unknown) => {
  if (error instanceof ConnectorAlreadyConnectedError) {
    toast.error('Wallet is already connected', {
      toastId: 'wallet-already-connected',
    });
    return;
  }

  if (error instanceof UserRejectedRequestError) {
    toast.error('You rejected connection. Try again', {
      toastId: 'user-rejected-request',
    });
    return;
  }

  if (error instanceof Error) {
    toast.error(error.message);
  }
};

const ConnectWallet: React.FC<ConnectWalletProps> = ({ onConnect }) => {
  const { connectAsync } = useConnect();

  const onConnectWithMetamask = async () => {
    try {
      const { account } = await connectAsync({
        connector: new MetaMaskConnector(),
      });

      onConnect?.(account);
    } catch (error: unknown) {
      errorHandler(error);
    }
  };

  const onConnectWithWalletConnect = async () => {
    try {
      const { account } = await connectAsync({
        connector: new WalletConnectConnector({
          options: {},
        }),
      });

      onConnect?.(account);
    } catch (error: unknown) {
      errorHandler(error);
    }
  };

  return (
    <div className="w-[300px] lg:w-[412px] flex flex-col gap-10 justify-center items-center mt-20">
      <h1 className="font-medium text-white lg:text-[20px] lg:leading-[30px] text-sm">
        Connect your wallet
      </h1>
      <div className="flex flex-col gap-6 w-full">
        <Button
          variant="primary"
          className="flex justify-between h-[70px]"
          onClick={onConnectWithMetamask}
        >
          <div className="flex gap-5 justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
              <Image
                src="/assets/user/metamask.svg"
                width={30}
                height={30}
                alt="metamask"
              />
            </div>
            <span className="text-white font-medium lg:text-[20px] lg:leading-[30px] text-sm">
              Metamask
            </span>
          </div>
          <span className="text-[#092F5C] font-medium text-sm">
            Recommended
          </span>
        </Button>
        <Button
          variant="primary"
          className="h-[70px] flex justify-between"
          onClick={onConnectWithWalletConnect}
        >
          <div className="flex gap-5 justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
              <Image
                src="/assets/user/wallet-connect.svg"
                width={35}
                height={35}
                alt="wallet-connect"
              />
            </div>
            <span className="text-white font-medium lg:text-[20px] lg:leading-[30px] text-sm">
              Connect Wallet
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ConnectWallet;
