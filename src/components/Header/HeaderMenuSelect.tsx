import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from '@/src/components/Button';

import ChevronRightIcon from '../Icon/ChevronRightIcon';

const HeaderMenuSelect: React.FC = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuList = [
    {
      title: 'Dashboard',
      path: '/',
    },
    {
      title: 'My Cases',
      path: '/case/mine',
    },
    {
      title: 'Prosecute',
      path: '/prosecute',
    },
    {
      title: 'Public Cases',
      path: '/case/public',
    },
    {
      title: 'Logout',
      path: '/logout',
    },
  ];

  return (
    <div className="relative">
      <Button variant="gradient" onClick={() => setMenuOpen(!menuOpen)}>
        <span>Menu</span>
        <ChevronRightIcon fill="#ffffff" className="rotate-90 ml-1" />
      </Button>
      <ul
        className={clsx([
          'bg-primary-100 absolute flex flex-col top-full right-0 rounded-2xl mt-1',
          'transition-opacity duration-300',
          !menuOpen && 'opacity-0 pointer-events-none',
        ])}
      >
        {menuList.map((item, index) => (
          <li key={index} className="group">
            <Link
              href={item.path}
              className={clsx([
                'h-10 w-36 flex items-center px-4 text-sm text-white cursor-pointer',
                router.pathname === item.path &&
                  'bg-primary-300 group-first:rounded-t-2xl group-last:rounded-b-2xl',
                router.pathname !== item.path &&
                  'hover:bg-primary-default group-first:rounded-t-2xl group-last:rounded-b-2xl',
              ])}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenuSelect;
