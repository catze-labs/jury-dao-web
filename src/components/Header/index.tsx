import clsx from 'clsx';
import Link from 'next/link';
import React, { ComponentPropsWithRef } from 'react';
import { useSetRecoilState } from 'recoil';

import Logo from '@/src/components/Logo';
import { landingState } from '@/src/states/landing';

import HeaderMenuSelect from './HeaderMenuSelect';
import HeaderUserInfo from './UserInfo';

interface HeaderProps extends ComponentPropsWithRef<'nav'> { }

const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  const setLandingState = useSetRecoilState(landingState);

  return (
    <nav
      id="header"
      className={clsx([
        'sticky top-0 left-0 px-4 xl:px-10 py-4 h-[80px] flex justify-between items-center bg-white z-[60]',
        className,
      ])}
      {...props}
    >
      <Link href="/" onClick={() => setLandingState(true)}>
        <Logo />
      </Link>
      <div className="flex items-center gap-0">
        <div
          // TODO: remove when login is implemented
          className="mr-2"
        >
          <HeaderUserInfo />
        </div>
        <div>
          <HeaderMenuSelect />
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Header, () => false);