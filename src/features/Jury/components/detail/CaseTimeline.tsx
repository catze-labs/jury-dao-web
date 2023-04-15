import { NextPage } from "next";
import CasePhase from "./CasePhase";
import Button from "@/src/components/Button";

const CaseTimeline: NextPage = () => {
  return (
    <div className="flex flex-col w-[270px] min-h-[936px] px-5 py-10 bg-primary-300 rounded-r-2xl justify-center items-center">
      <div className="flex flex-col gap-20">
        <CasePhase />
        <div className="flex flex-col gap-10 px-5 min-w-[230px]">
          <div className="flex flex-col gap-[10px]">
            <span className="font-medium text-sm text-white">
              If you think the plaintiff is innocent
            </span>
            <Button variant="primary">
              Vote for plaintiff
            </Button>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="font-medium text-sm text-white">
              If you think the defendant is innocent
            </span>
            <Button variant="secondary">
              Vote for defendant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseTimeline;