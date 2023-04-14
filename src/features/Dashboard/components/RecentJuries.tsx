import { NextPage } from "next";
import { ComponentProps } from "react";
import JuryItem from "./JuryItem";
import { useRouter } from "next/router";


const ArrowIcon: React.FC<ComponentProps<'svg'>> = ({
  ...props
}) => (
  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579C6.78105 5.36684 6.78105 6.63317 6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#1DC1A4" />
  </svg>
)

const RecentJuries: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex-grow flex flex-col gap-[10px]">
      <div className="justify-between flex">
        <h1 className="text-[#4D94E7] font-bold text-[20px] leading-[30px]">Recent Juries</h1>
        <div
          className="flex items-center p-[10px] gap-[10px] cursor-pointer"
          onClick={() => router.push('/case/public')}
        >
          <span className="text-[#1DC1A4] font-medium text-sm">View More</span>
          <ArrowIcon />
        </div>
      </div>
      <JuryItem />
      <JuryItem />
      <JuryItem />
      <JuryItem />
      <JuryItem />
    </div>
  );
}

export default RecentJuries;