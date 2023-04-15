import { NextPage } from "next";

const WIP: NextPage = () => {
  return (
    <div className="w-full h-[52px] bg-secondary-100 flex justify-center items-center">
      <span className="text-white font-bold text-sm">WIP - We are working on it!</span>
    </div>
  );
}

export default WIP;