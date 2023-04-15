import clsx from 'clsx';
import Image from 'next/image';
import React, { ComponentProps } from 'react';

const Section5: React.FC<ComponentProps<'article'>> = ({ className }) => {
  const profiles = [
    {
      name: 'Erick',
      role: 'Technical Lead',
      message: '',
      image: '/assets/landing/profiles/ek.jpg',
    },
    {
      name: 'Sky',
      role: 'Lead Product Designer',
      message: 'I am a designer exclusively for web3 ❤',
      image: '/assets/landing/profiles/sky.jpg',
    },
    {
      name: 'Philip',
      role: 'Software Engineer & Project Manager',
      message: '',
      image: '/assets/landing/profiles/philip.jpg',
    },
    {
      name: 'Jamie',
      role: 'Frontend Developer',
      message: '',
      image: '/assets/landing/profiles/jamie.jpg',
    },
    {
      name: 'Aiiiden',
      role: 'Frontend Developer',
      message: '',
      image: '/assets/landing/profiles/aiden.jpg',
    },
  ];

  return (
    <article
      className={clsx([
        'flex flex-col w-full justify-center gap-14 xl:gap-24 h-screen bg-gradient-type-2 relative overflow-y-hidden',
        className,
      ])}
    >
      <div className="text-center w-full">
        <h2 className="text-4xl xl:text-[70px] text-white font-bold leading-tight tracking-wide xl:tracking-normal">
          Meet the Team
        </h2>
        <p className="text-lg xl:text-[32px] font-medium text-white leading-tight tracking-tight xl:tracking-normal">
          <a
            className="font-bold hover:underline hover:underline-offset-8"
            href="https://catze.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            Catze Labs
          </a>{' '}
          Based in South Korea
        </p>
      </div>
      <div className="w-full overflow-y-hidden scrollbar-hide">
        <div className="flex w-fit mx-auto xl:justify-center px-5 gap-12 pointer-events-none select-none">
          {profiles.map((profile) => (
            <figure key={profile.name}>
              <Image
                src={profile.image}
                alt={profile.name}
                width={167}
                height={167}
                className="rounded-2xl object-cover"
              />
              <figcaption className="w-[167px] flex flex-col gap-2 pt-2.5">
                <h3 className="text-sm font-medium text-white">
                  {profile.name}
                </h3>
                <p className="text-sm text-white tracking-tight">
                  {profile.role}
                </p>
                <p className="text-xs text-white">{profile.message}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Section5;
