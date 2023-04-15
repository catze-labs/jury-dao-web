import Button from "@/src/components/Button";
import { NextPage } from "next";
import Image from "next/image";

const ConnectWallet: NextPage = () => {
  return (
    <div className="w-[300px] lg:w-[412px] flex flex-col gap-10 justify-center items-center mt-20">
      <h1 className="font-medium text-white lg:text-[20px] lg:leading-[30px] text-sm">Connect your wallet</h1>
      <div className="flex flex-col gap-6 w-full">
        <Button
          variant="primary"
          className="flex justify-between h-[70px]"
        >
          <div className="flex gap-5 justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
              <Image src="/assets/user/metamask.svg" width={30} height={30} alt="metamask" />
            </div>
            <span className="text-white font-medium lg:text-[20px] lg:leading-[30px] text-sm">Metamask</span>
          </div>
          <span className="text-[#092F5C] font-medium text-sm">Recommended</span>
        </Button>
        <Button
          variant="primary"
          className="h-[70px] flex justify-between"
        >
          <div className="flex gap-5 justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
              <Image src="/assets/user/wallet-connect.svg" width={35} height={35} alt="wallet-connect" />
            </div>
            <span className="text-white font-medium lg:text-[20px] lg:leading-[30px] text-sm">Connect Wallet</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default ConnectWallet;