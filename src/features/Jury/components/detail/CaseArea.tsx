import { NextPage } from "next";
import CaseAreaHeader from "./CaseAreaHeader";
import CaseAreaContent from "./CaseAreaContent";

const CaseArea: NextPage = () => {
  return (
    <div className="w-[790px] px-[30px] py-5 flex flex-col justify-center items-center gap-5 bg-white rounded-l-2xl pb-8">
      <CaseAreaHeader />
      <CaseAreaContent />
    </div>
  );
}

export default CaseArea;