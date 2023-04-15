import clsx from 'clsx';
import Link from 'next/link';
import React, { ComponentPropsWithRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Logo from '@/src/components/Logo';
import { landingState } from '@/src/states/landing';
import { profileState } from '@/src/states/profile';

import NoSSR from '../NoSSR';
import HeaderMenuSelect from './HeaderMenuSelect';
import HeaderUserInfo from './UserInfo';

interface HeaderProps extends ComponentPropsWithRef<'nav'> {}

const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  const setLandingState = useSetRecoilState(landingState);
  const profile = useRecoilValue(profileState);

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
        <div>
          <HeaderUserInfo />
        </div>
        <NoSSR>{profile.token && <HeaderMenuSelect />}</NoSSR>
      </div>
    </nav>
  );
};

export default React.memo(Header, () => false);
