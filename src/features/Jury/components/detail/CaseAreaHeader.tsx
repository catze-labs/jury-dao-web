import { NextPage } from "next";
import Image from "next/image";

const CaseAreaHeader: NextPage = () => {
  return (
    <div className="flex flex-col p-[10px] gap-[10px] justify-center items-center">
      <div className="flex gap-[10px]">
        <h1 className="text-[#006AE5] text-[20px] leading-[30px] font-bold">1st trial</h1>
        <Image src="/assets/jury/mantle-coin.png" alt="mantle-coin" width={28} height={28} />
        <span className="text-[#313131] text-[20px] leading-[30px] font-medium">10 BIT</span>
      </div>
      <div>
        <h1 className="text-[#313131] text-[20px] leading-[30px] font-bold">
          He is Scam. He hacked into XXX and stole the money.
        </h1>
      </div>
    </div>
  );
}

export default CaseAreaHeader;