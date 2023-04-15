import clsx from 'clsx';
import { NextPage } from 'next';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { UserRejectedRequestError, useAccount, useSignMessage } from 'wagmi';

import { useNonce } from '@/src/requests/auth';

const Signing: React.FC<{
  setter?: Dispatch<SetStateAction<boolean>>;
  onSign?: (signature: string) => void;
  onDecline?: () => void;
}> = ({ setter, onSign, onDecline }) => {
  const { address } = useAccount();
  const { signMessage } = useSignMessage({
    onSuccess(signature) {
      onSign?.(signature);
    },
    onError(error) {
      if (error instanceof UserRejectedRequestError) {
        onDecline?.();
      }
    },
  });
  const { data } = useNonce(address as string);

  const onSignMessage = async () => {
    signMessage({
      message: data?.nonce as string,
    });
  };

  useEffect(() => {
    if (!data) return;
    setter?.(false);
    onSignMessage();
  }, [data]);

  return (
    <div className="w-[213px] flex flex-col justify-center items-center gap-10 mt-[78px]">
      <h1
        className={clsx([
          'font-medium text-[20px] leading-[30px] text-gradient-type-1 text-center',
        ])}
      >
        Sign messages
      </h1>
      <div className="relative">
        <Image
          src="/assets/user/loading-circle.svg"
          className="animate-spin-slow"
          width={120}
          height={120}
          alt="loading"
        />
        <Image
          src="/assets/user/metamask.svg"
          className="absolute top-9 left-9"
          width={50}
          height={50}
          alt="metamask"
        />
      </div>
    </div>
  );
};

export default Signing;
