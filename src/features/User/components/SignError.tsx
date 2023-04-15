import Button from "@/src/components/Button";
import { NextPage } from "next";
import Image from "next/image";

const SignError: NextPage = () => {
  return (
    <div className="w-[300px] lg:w-[412px] flex flex-col gap-10 justify-center items-center mt-[59px]">
      <h1 className="font-medium text-white lg:text-[20px] lg:leading-[30px] text-sm">Ooops! It declined.</h1>
      <div className="relative">
        <Image src="/assets/user/error-circle.svg" width={120} height={120} alt="error" />
        <Image src="/assets/user/metamask.svg" className="absolute top-[35px] left-[35px]" width={50} height={50} alt="metamask" />
      </div>
      <div className="flex flex-col gap-6 w-full">
        <Button
          variant="primary"
          className="flex h-[70px] justify-center"
        >
          <span className="text-white font-medium lg:text-[20px] lg:leading-[30px] text-sm">Try Again</span>
        </Button>
        <Button
          variant="primary"
          className="flex h-[70px] justify-center"
        >
          <span className="text-white font-medium lg:text-[20px] lg:leading-[30px] text-sm">Choose Another Wallet</span>
        </Button>
      </div >
    </div >
  );
}

export default SignError;