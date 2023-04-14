import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/src/components/Button';

const DashboardVisual = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[300px] lg:h-[700px] bg-gradient-type-2 rounded-2xl relative flex flex-col justify-center gap-[86px] pt-12">
      <div className="h-[200px] flex flex-col gap-5">
        <h1 className="text-[#F5F5F5] text-[32px] leading-[48px] tracking-[-.02em] font-bold text-center">
          JURY DAO
        </h1>
        <span className="font-medium text-center text-[#F5F5F5] text-sm">
          Safeguarding Fair Play,
          <br />
          Empowering the Community
        </span>
        <div className="flex justify-center">
          <Button
            variant="secondary"
            onClick={() => router.push('/case/public')}
            className="h-10 text-white text-center font-medium text-sm"
          >
            View Public Cases
          </Button>
        </div>
      </div>
      <div className="lg:flex lg:justify-center hidden">
        <Image
          src="/assets/dashboard/balances.png"
          alt="balances"
          width={343}
          height={343}
        />
      </div>
    </div>
  );
};

export default DashboardVisual;
