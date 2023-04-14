import clsx from 'clsx';
import Image from 'next/image';
import React, { ComponentProps } from 'react';

const Footer: React.FC<ComponentProps<'footer'>> = ({
  className,
  ...props
}) => {
  return (
    <footer className={clsx(['py-14', className])} {...props}>
      <div className="container flex flex-col items-center">
        <Image
          className="mb-16"
          src="/assets/logo/title-display.svg"
          width={140}
          height={20}
          title="JURY DAO"
          alt="JURY DAO"
        />
        <ul className="flex justify-center items-center gap-10">
          <li>
            <a
              href="https://twitter.com/CatzeLabs"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 p-2 flex justify-center items-center rounded-full hover:bg-[rgba(255,255,255,0.1)]"
            >
              <Image
                src="/assets/footer/twitter.svg"
                width={30}
                height={30}
                alt="twitter"
              />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/cyber-galz"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 p-2 flex justify-center items-center rounded-full hover:bg-[rgba(255,255,255,0.1)]"
            >
              <Image
                src="/assets/footer/medium.svg"
                width={30}
                height={30}
                alt="medium"
              />
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/invite/cybergalznft"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 p-2 flex justify-center items-center rounded-full hover:bg-[rgba(255,255,255,0.1)]"
            >
              <Image
                src="/assets/footer/discord.svg"
                width={30}
                height={30}
                alt="discord"
              />
            </a>
          </li>
          <li>
            <a
              href="https://cyber-galz.gitbook.io/yooldo-whitepaper/trouble-punk-yooldo-whitepaper/release-note"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 p-2 flex justify-center items-center rounded-full hover:bg-[rgba(255,255,255,0.1)]"
            >
              <Image
                src="/assets/footer/gitbook.svg"
                width={30}
                height={30}
                alt="gitbook"
              />
            </a>
          </li>
        </ul>
        <p className="text-sm text-primary-default mt-7">
          © 2023 JURYDAO. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
