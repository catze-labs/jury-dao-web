import clsx from 'clsx';
import Image from 'next/image';
import React, { ComponentProps } from 'react';

const Section2: React.FC<ComponentProps<'article'>> = ({ className }) => {
  const features = [
    {
      title: 'Proactive Fraud Detection',
      image: '/assets/landing/ballot.png',
      description:
        'Proactively identify and address potential fraudulent activities in advance',
    },
    {
      title: 'Decentralized Governance',
      image: '/assets/landing/coin.png',
      description:
        'Governed by decentralized jury community members ensuring transparency and avoiding centralization',
    },
    {
      title: 'Fair and Transparent System',
      image: '/assets/landing/scale.png',
      description:
        'Aims to provide a fair and transparent mechanism for addressing misconducts',
    },
  ];

  return (
    <article
      className={clsx([
        'h-screen bg-gradient-type-2 flex flex-col justify-center items-center xl:gap-24 gap-10',
        className,
      ])}
    >
      <h2 className="text-[30px] xl:text-[70px] font-bold text-white text-center w-full">
        Key Features
      </h2>
      <div className="w-full overflow-x-auto h-[370px] scrollbar-hide">
        <div className="flex gap-9 w-fit px-4 mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="w-[270px] h-[370px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-between p-8"
            >
              <div className="flex justify-start w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={107}
                  height={107}
                />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium text-gray-400 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-sm font-medium text-gray-200 tracking-tight text-left">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Section2;
