import { NextPage } from 'next';
import Image from 'next/image';
import { useDisconnect, useSwitchNetwork } from 'wagmi';

import Button from '@/src/components/Button';
import { mantletestnet } from '@/src/config/chain';

const ChainWarning: NextPage = () => {
  const { disconnect } = useDisconnect();
  const { switchNetwork } = useSwitchNetwork();
  return (
    <div className="w-[300px] lg:w-[412px] flex flex-col gap-10 justify-center items-center mt-[78px]">
      <h1 className="font-medium text-[#F5F5F5] lg:text-[20px] lg:leading-[30px] text-sm whitespace-nowrap">
        Oooops! Only Mantle network is available!
      </h1>
      <div className="flex flex-col gap-6 w-full">
        <Button
          variant="primary"
          className="h-[70px] flex justify-center items-center"
          onClick={() => switchNetwork?.(mantletestnet.id)}
        >
          <div className="flex gap-[10px] justify-center items-center">
            <Image
              src="/assets/user/mantle.svg"
              width={32}
              height={32}
              alt="mantle"
            />
            <span className="text-white font-medium lg:text-[20px] lg:leading-[30px] text-sm">
              Connect Mantle Network
            </span>
          </div>
        </Button>
        <Button
          variant="primary"
          className="h-[70px] flex justify-center items-center"
          onClick={() => disconnect()}
        >
          <div className="flex gap-5 justify-center items-center">
            <span className="text-white font-medium lg:text-[20px] lg:leading-[30px] text-sm">
              Choose Another Wallet
            </span>
          </div>
        </Button>
        <a
          href="https://www.mantle.xyz/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center"
        >
          <span className="text-[#1DC1A4] text-sm font-medium hover:border-b hover:border-[#1DC1A4]">
            What is mantle network?
          </span>
        </a>
      </div>
    </div>
  );
};

export default ChainWarning;
