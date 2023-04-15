import Button from "@/src/components/Button";
import { NextPage } from "next";

const OpencaseMessage: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-primary-400 flex flex-col justify-center items-center">
      <div className="w-[412px] h-[490px] flex flex-col gap-[82px] justify-center">
        <div className="flex gap-[65px] justify-center">
          <h1 className="font-bold text-white text-[32px] leading-[48px] text-center">Login</h1>
        </div>
        <div className="flex flex-col gap-[38px] justify-center items-center">
          <span className="text-[20px] leading-[30px] font-medium text-[#F5F5F5] text-center">
            Welcome back <span className="text-gradient-type-1">John Doe</span>. <br />
            Good to see you again!
          </span>
          <div className="w-[476px] border border-[#4D94E7]" />
          <span className="text-[20px] leading-[30px] font-medium text-[#F5F5F5] text-center">
            You have an open case. <br />
            Here is what you can do.
          </span>
        </div>
      </div>
      <div className="w-[412px] flex flex-col gap-6">
        <Button
          variant="primary"
          className="h-[70px] flex justify-center text-[20px] leading-[30px]"
        >
          Check My Case
        </Button>
        <Button
          variant="primary"
          className="h-[70px] flex justify-center text-[20px] leading-[30px]"
        >
          Go To Home
        </Button>
      </div>
    </div>
  );
}

export default OpencaseMessage;