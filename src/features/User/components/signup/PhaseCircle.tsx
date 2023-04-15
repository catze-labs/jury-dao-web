import clsx from 'clsx';
import { NextPage } from 'next';

interface PhaseProps {
  phase: number;
}

const Phase = {
  Wallet: 0,
  Signing: 1,
  Info: 2,
};

const PhaseCircle: NextPage<PhaseProps> = ({ phase }) => {
  return (
    <div className="flex justify-center items-center lg:gap-[22.5px] gap-4">
      <div
        className={clsx([
          `rounded-full text-white font-medium text-[32px] leading-[48px] text-center`,
          `lg:w-[63px] lg:h-[63px] items-center justify-center flex w-12 h-12`,
          `${phase === 0 ? 'bg-secondary-default' : 'bg-primary-400'}`,
        ])}
      >
        1
      </div>
      <div className="lg:w-10 w-5 border border-[#4D94E7]" />
      <div
        className={clsx([
          `rounded-full text-white font-medium text-[32px] leading-[48px] text-center`,
          `lg:w-[63px] lg:h-[63px] items-center justify-center flex w-12 h-12`,
          `${phase === 1 ? 'bg-secondary-default' : 'bg-primary-400'}`,
        ])}
      >
        2
      </div>
      <div className="lg:w-10 w-5 border border-[#4D94E7]" />
      <div
        className={clsx([
          `rounded-full text-white font-medium text-[32px] leading-[48px] text-center`,
          `lg:w-[63px] lg:h-[63px] items-center justify-center flex w-12 h-12`,
          `${phase === 2 ? 'bg-secondary-default' : 'bg-primary-400'}`,
        ])}
      >
        3
      </div>
    </div>
  );
};

export default PhaseCircle;
