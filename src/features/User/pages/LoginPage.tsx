import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount, useDisconnect, useNetwork } from 'wagmi';

import { mantletestnet } from '@/src/config/chain';
import { ACCESS_TOKEN_KEY } from '@/src/config/storageKey';
import { useLogin } from '@/src/requests/auth';

import ChainWarning from '../components/ChainWarning';
import ConnectWallet from '../components/ConnectWallet';
import SignError from '../components/SignError';
import Signing from '../components/Signing';
import WelcomeMessage from '../components/WelcomeMessage';

const LoginPage: NextPage = () => {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  const unsupportedChain = chain?.id !== mantletestnet.id;

  const {
    mutate: login,
    isLoading,
    isSuccess,
  } = useLogin(
    (accessToken) => {
      toast.success('Successfully Logged in');
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    },
    (error) => {
      toast.error(error.message);
    },
  );

  if (isSuccess) {
    return <WelcomeMessage pageType="login" />;
  }

  return (
    <div className="w-full min-h-screen bg-primary-400 flex flex-col justify-center items-center">
      <h1 className="text-[32px] leading-[48px] font-bold text-white">Login</h1>
      {!isSuccess && !isConnected && (
        <ConnectWallet onConnect={(address) => {}} />
      )}
      {!isSuccess && isConnected && unsupportedChain && <ChainWarning />}
      {!isSuccess && isConnected && !unsupportedChain && (
        <Signing
          onSign={(signature) => {
            login({ walletAddress: address as string, signature });
          }}
          onDecline={() => {
            toast.error('You declined the signature');
          }}
        />
      )}
    </div>
  );
};

export default LoginPage;
