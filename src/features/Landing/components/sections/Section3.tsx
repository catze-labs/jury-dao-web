import clsx from 'clsx';
import Image from 'next/image';
import React, { ComponentProps } from 'react';

const Section3: React.FC<ComponentProps<'article'>> = ({ className }) => {
  return (
    <article
      className={clsx([
        'flex items-center h-screen bg-gray-light relative overflow-y-hidden',
        className,
      ])}
    >
      <Image
        className="pointer-events-none user-select-none absolute -top-32 -left-24 xl:-top-64 xl:-left-52 z-0"
        src="/assets/landing/circle-gradient.jpg"
        width={772}
        height={772}
        alt="garnish"
      />
      <div className="container flex flex-col xl:flex-row xl:justify-between items-center z-10">
        <div>
          <h2 className="text-gradient-type-1  text-center xl:text-left text-[30px] xl:text-[70px] font-bold xl:w-fit w-full leading-tight tracking-tight">
            A Fair Chance <br />
            for All Gamers
          </h2>

          <p className="w-full xl:w-[440px] mt-6 xl:mt-10 text-primary-default text-sm tracking-tight">
            JuryDAO provides a community-driven approach to combating cheating,
            trolling, and abuse in online games. By using decentralized
            governance, it establishes a fair and transparent system that
            penalizes wrongdoings and prevents fraudulent activities. <br />
            <br />
            We aim to provide a robust and reliable solution for addressing
            misconducts on digital platforms based on our expertise-based jury
            selection.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Section3;
