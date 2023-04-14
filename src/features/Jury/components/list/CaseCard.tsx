import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { ComponentPropsWithRef } from 'react';

import Button from '@/src/components/Button';
import ChevronRightIcon from '@/src/components/Icon/ChevronRightIcon';

interface CaseCardProps extends ComponentPropsWithRef<'article'> {}

const CaseCard: React.FC<CaseCardProps> = ({ ref, className, ...props }) => {
  return (
    <article
      role="listitem"
      className={clsx([
        'p-5 bg-white rounded-2xl overflow-y-hidden overflow-x-auto relative scrollbar-hide',
        className,
      ])}
      ref={ref}
    >
      <div className="flex gap-5 items-start xl:w-full">
        <div className="flex-grow">
          <div className="flex items-center gap-2.5 p-2.5">
            <p className="text-primary-100 font-bold text-xl tracking-tight">
              1st trial
            </p>

            <Image
              src="/assets/jury/coin-small.png"
              width={28}
              height={28}
              alt="collateral"
            />

            <p className="text-gray-400 text-xl tracking-tight">0.01 ETH</p>
          </div>
          <div className="p-2.5">
            <Link href={`/case/1`} className="group">
              <h3 className="text-xl font-bold tracking-tight text-primary-default elipsis-row-2 w-80 xl:w-auto group-hover:underline underline-offset-2">
                He is Scam. He hacked into XXX and stole the money.
              </h3>
            </Link>
          </div>
          <div className="flex flex-col gap-0">
            <p className="flex items-center gap-5 p-2.5">
              <span className="text-gray-400 text-sm tracking-tight">
                Plaintiff Nickname
              </span>
              <ChevronRightIcon fill="#1DC1A4" />
              <span className="text-gray-400 text-sm tracking-tight">
                Defendant Nickname
              </span>
            </p>
            <p className="text-sm text-gray-200 p-2.5">YYYY.MM.DD HH:MM</p>
          </div>
        </div>
        <div className="basis-52 xl:basis-72 shrink-0 flex flex-col gap-0 p-2.5">
          <p className="p-2.5 text-right text-sm">Status Name</p>

          <p className="flex flex-col">
            <time className="block px-2.5 text-right font-bold text-secondary-default text-[32px]">
              HH:MM:SS
            </time>
            <span className="block text-right px-2.5 text-sm text-gray-400">
              left for STATUS
            </span>
          </p>
          <div className="flex justify-end p-2.5">
            <Button disabled>Action</Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CaseCard;
