import { NextPage } from "next";
import { ComponentProps } from "react";

const ArrowIcon: React.FC<ComponentProps<'svg'>> = ({
  ...props
}) => (
  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579C6.78105 5.36684 6.78105 6.63317 6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#1DC1A4" />
  </svg>
)

const JuryItem: NextPage = () => {
  const truncateWalletAddress = (walletAddress: string) => {
    return "0x" + walletAddress.slice(2, 12) + "...";
  }

  return (
    <div className="flex rounded-xl p-5 border border-[#4D94E7] gap-5 lg:items-center lg:flex-row flex-col items-start">
      <span className="text-[#545454] text-sm min-w-[288px] font-medium">Jury title will be here</span>
      <div className="flex flex-row justify-center items-center gap-5 ">
        <span className="text-[#4D94E7] text-sm font-bold">Jamie Choi</span>
        <ArrowIcon />
        <span className="text-[#0053B4] text-sm font-bold">{truncateWalletAddress('0xE5e29Ef0393FA11697D4B5cAA00bf8B99241004a')}</span>
      </div>
    </div>
  );
}

export default JuryItem;