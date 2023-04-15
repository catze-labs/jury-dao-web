import clsx from "clsx";
import TrialSelect from "./TrialSelect";

const VoteDetail: React.FC = () => {
  const calculatePercentage = (who: string) => {
    // total of plaintiff, defendant votes
    const total = 32 + 45;
    const percentage = who === 'p' ? 32 / total * 100 : 45 / total * 100;
    return Math.trunc(percentage);
  }

  return (
    <div className="bg-white rounded-2xl flex flex-col gap-5 px-10 py-[30px]">
      <div className="p-[10px] flex justify-between">
        <h1 className="text-[20px] leading-[30px] font-bold text-[#313131]">Votes</h1>
        <TrialSelect />
      </div>
      <div className="flex flex-col gap-[30px]">
        {/* Votes Info */}
        <div className="p-5 border border-[#4D94E7] rounded-2xl flex justify-between items-center">
          <div className="text-[#006AE5] font-bold text-[20px] leading-[30px]">
            1st trial - Plaintiff win
          </div>
          <div className="text-sm font-medium text-[#313131]">
            {`Plaintiff got ${130} votes, and Defendant got ${87} votes.`} <br />
            <span className="font-bold">
              {`Defendant${'Sam Bankman'} has objected the 1st trial, so the 2nd Trial has begun.`}
            </span>
          </div>
        </div>

        {/* Votes Detail */}
        <div className="flex flex-col gap-[7px]">
          {/* No votes */}
          {/* <div className="w-full min-h-[32px] bg-[#D9D9D9] rounded-lg flex justify-center items-center">
            <span className="font-medium text-sm text-[#545454]">There are no votes</span>
          </div> */}
          {/* Votes Graph */}
          <div className="flex flex-row justify-center items-center text-sm text-white w-full font-medium min-h-[32px]">
            <div className={clsx([
              `flex justify-end bg-[#4D94E7] rounded-l-lg p-[6px]`
            ])}
              style={{ flexBasis: calculatePercentage('p') + '%' }}
            >
              ${calculatePercentage('p')}%
            </div>
            <div className={clsx([
              `flex justify-start bg-[#1DC1A4] rounded-r-lg p-[6px]`
            ])}
              style={{ flexBasis: calculatePercentage('d') + '%' }}
            >
              ${calculatePercentage('d')}%
            </div>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-sm text-black">Agree to Plaintiff</span>
            <span className="font-medium text-sm text-black">Agree to Defendant</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-sm text-black">{`${32} votes`}</span>
            <span className="font-medium text-sm text-black">{`${45} votes`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteDetail;