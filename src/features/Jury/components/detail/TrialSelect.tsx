import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import ChevronRightIcon from '@/src/components/Icon/ChevronRightIcon';

const TrialSelect: React.FC = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  const menuList = [
    {
      title: '1st Trial',
    },
    {
      title: '2nd Trial',
    },
  ];

  return (
    <div className="relative">
      <button
        className={clsx([
          'flex border border-[#4D94E7] bg-white text-[#4D94E7] justify-center items-center',
          'min-h-[30px] rounded-full px-4 py-2 gap-2.5',
          'text-sm font-bold'
        ])}
        onClick={() => setMenuOpen(!menuOpen)}>
        <span>{menuList[0].title}</span>
        <ChevronRightIcon fill="#4D94E7" className="rotate-90 ml-1" />
      </button>
      <ul
        className={clsx([
          'bg-primary-100 absolute flex flex-col top-full right-0 rounded-2xl mt-1',
          'transition-opacity duration-300 w-[100px]',
          !menuOpen && 'opacity-0 pointer-events-none',
        ])}
      >
        {menuList.map((item, index) => (
          <li
            key={index}
            className={clsx([
              'h-10 w-[100px] rounded-xl flex items-center px-4 text-sm text-white cursor-pointer',
              selected === item.title &&
              'bg-primary-300',
              selected !== item.title &&
              'hover:bg-primary-default',
            ])}
            onClick={() => { setSelected(item.title) }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div >
  );
};

export default TrialSelect;
