import clsx from 'clsx';
import Image from 'next/image';
import React, { ComponentProps } from 'react';

const Section4: React.FC<ComponentProps<'article'>> = ({ className }) => {
  return (
    <article
      className={clsx([
        'flex w-full items-center h-screen bg-gray-light relative overflow-y-hidden',
        className,
      ])}
    >
      <Image
        className="pointer-events-none user-select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
        src="/assets/landing/scale-blur.jpg"
        width={807}
        height={807}
        alt="garnish"
      />
      <div className="flex flex-col items-center w-full z-10 gap-10">
        <h2 className="px-8 xl:w-full">
          <span className="absolute -top-12">JURY DAO</span>
          <Image
            className="mx-auto"
            src="/assets/logo/title-display.svg"
            width={742}
            height={106}
            title="JURY DAO"
            alt="JURY DAO"
          />
        </h2>
        <p className="text-primary-300 text-sm xl:text-3xl text-center tracking-tight leading-snug px-4">
          Decentralized Justice for Online Gaming - <br />
          Unleashing the Power of the Community with JuryDAO
        </p>
      </div>
    </article>
  );
};

export default Section4;
