import clsx from 'clsx';
import Image from 'next/image';
import React, { ComponentProps } from 'react';

const Section1: React.FC<ComponentProps<'header'>> = ({ className }) => {
  return (
    <header
      className={clsx([
        'w-full h-content bg-primary-300 flex justify-center pt-[200px] relative overflow-hidden',
        className,
      ])}
    >
      <h1 className="text-[28px] h-fit tracking-tight xl:text-[70px] font-bold text-gradient-type-1 text-center z-10">
        Safeguarding Fair Play <br />
        Empowering the Community
      </h1>

      <div className="w-[3000px] pointer-events-none user-select-none h-[396] absolute left-1/2 -translate-x-1/2 bottom-0">
        <Image
          className="mx-auto"
          src="/assets/landing/blue-wave.jpg"
          width={1522}
          height={396}
          alt="garnish"
        />
      </div>
    </header>
  );
};

export default Section1;
