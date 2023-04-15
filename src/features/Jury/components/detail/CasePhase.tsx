import { NextPage } from "next";

const CasePhase: NextPage = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <h1 className="text-[20px] leading-[30px] text-[#F5F5F5] font-bold">Case Timeline</h1>
      <div className="flex flex-col gap-10">
        <div className="flex gap-[10px]">
          <div className={`w-[15px] h-[15px] rounded-full border border-[#313131] bg-gray-200`} />
          <div className="text-sm text-[#8D8D8D] font-medium">Case created</div>
        </div>
        <div className="flex gap-[10px]">
          <div className={`w-[15px] h-[15px] rounded-full border border-[#019077] bg-secondary-200`} />
          <div className="text-sm text-[#1DC1A4] font-medium">Defense Time</div>
        </div>
        <div className="flex gap-[10px]">
          <div className={`w-[15px] h-[15px] rounded-full border border-[#8D8D8D] bg-[#F5F5F5]`} />
          <div className="text-sm text-[#DCDCDC] font-medium">Voting Time</div>
        </div>
        <div className="flex gap-[10px]">
          <div className={`w-[15px] h-[15px] rounded-full border border-[#8D8D8D] bg-[#F5F5F5]`} />
          <div className="text-sm text-[#DCDCDC] font-medium">Case Finished</div>
        </div>
        <div className="flex gap-[10px]">
          <div className={`w-[15px] h-[15px] rounded-full border border-[#8D8D8D] bg-[#F5F5F5]`} />
          <div className="text-sm text-[#DCDCDC] font-medium">Objected</div>
        </div>
        <div className="flex gap-[10px]">
          <div className={`w-[15px] h-[15px] rounded-full border border-[#8D8D8D] bg-[#F5F5F5]`} />
          <div className="text-sm text-[#DCDCDC] font-medium">Distributed</div>
        </div>
      </div>
    </div>
  );
}

export default CasePhase;