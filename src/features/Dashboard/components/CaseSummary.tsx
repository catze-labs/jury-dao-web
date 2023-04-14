import { NextPage } from "next";
import Button from "@/src/components/Button";
import { useRouter } from "next/router";

const CaseSummary: NextPage = () => {
  const router = useRouter();
  return (
    <div className="basis-64 bg-primary-200 rounded-xl flex gap-5 justify-center items-center lg:flex-row lg:py-0 flex-col py-5">
      {/* Log out */}
      {/* <div className="w-[270px] h-[111px] p-[10px] flex flex-col gap-[10px] items-center justify-between">
        <span className="text-[#F5F5F5] text-sm">Have an JURY DAO account?</span>
        <div>
          <Button
            className="px-5 py-[10px] text-white text-sm cursor-pointer"
            variant="primary"
            onClick={() => router.push('/login')}
          >
            Login with wallet
          </Button>
        </div>
      </div>
      <div className="w-[270px] h-[111px] p-[10px] flex flex-col gap-[10px] items-center justify-between">
        <span className="text-[#F5F5F5] text-sm">Don&lsquo;t have an account yet?</span>
        <div>
          <Button
            className="px-5 py-[10px] text-white text-sm cursor-pointer"
            variant="primary"
            onClick={() => router.push('/signup')}
          >
            Sign up with wallet
          </Button>
        </div>
      </div> */}
      {/* Log in */}
      <div className="w-[270px] flex flex-col p-[10px] gap-[10px] text-center">
        <span className="text-[#F5F5F5] text-sm">Your Active Cases</span>
        <div className="w-[250px] flex py-3 gap-[10px] justify-between">
          <div className="flex flex-col text-center">
            <span className="font-bold text-[#F5F5F5] text-[32px] leading-[48px]">1</span>
            <span className="font-medium text-[#F5F5F5] text-sm">As a Defendant</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="font-bold text-[#F5F5F5] text-[32px] leading-[48px]">2</span>
            <span className="font-medium text-[#F5F5F5] text-sm">As a Plaintiff</span>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            variant="primary"
            className="px-[16.5px] py-[10px] text-white font-medium text-sm"
          >
            My Cases
          </Button>
        </div>
      </div>
      <div className="border border-[#006AE5] w-[179px] rotate-90 flex-grow-0" />
      <div className="w-[270px] flex flex-col p-[10px] gap-[10px] text-center">
        <span className="text-[#F5F5F5] text-sm">Case Outcome</span>
        <div className="w-[250px] flex py-3 gap-[10px] justify-between">
          <div className="flex flex-col text-center">
            <span className="font-bold text-[#F5F5F5] text-[32px] leading-[48px]">10</span>
            <span className="font-medium text-[#F5F5F5] text-sm">Won Cases</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="font-bold text-[#F5F5F5] text-[32px] leading-[48px]">2</span>
            <span className="font-medium text-[#F5F5F5] text-sm">Lost Cases</span>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            variant="primary"
            className="px-[16.5px] py-[10px] text-white font-medium text-sm"
          >
            Prosecute
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CaseSummary;