import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import Button from '@/src/components/Button';
import ChevronRightIcon from '@/src/components/Icon/ChevronRightIcon';
import Section1 from '@/src/features/Landing/components/sections/Section1';
import Section2 from '@/src/features/Landing/components/sections/Section2';
import Section3 from '@/src/features/Landing/components/sections/Section3';
import Section4 from '@/src/features/Landing/components/sections/Section4';
import Section5 from '@/src/features/Landing/components/sections/Section5';
import Section6 from '@/src/features/Landing/components/sections/Section6';
import Section7 from '@/src/features/Landing/components/sections/Section7';
import { landingState } from '@/src/states/landing';

const LandingArea: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [showLanding, setShowLanding] = useRecoilState(landingState);

  const [didScrollDown, setDidScrollDown] = useState<boolean>(false);
  const [didScrolltoBottom, setDidScrolltoBottom] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    if (!showLanding) return;

    if (scrollRef.current) {
      const height = scrollRef.current.scrollHeight;
      const { scrollTop } = scrollRef.current;

      if (scrollTop > 120) {
        setDidScrollDown(true);
        document.getElementById('header')?.classList.add('z-40');
        document.getElementById('header')?.classList.remove('z-[60]');
      } else {
        setDidScrollDown(false);
        document.getElementById('header')?.classList.remove('z-40');
        document.getElementById('header')?.classList.add('z-[60]');
      }

      if (scrollTop >= height - 1200) {
        setDidScrolltoBottom(true);
      } else {
        setDidScrolltoBottom(false);
      }
    }
  }, [showLanding]);

  return (
    <div
      className={clsx([
        'transition-all duration-500 ease-in-out fixed w-full z-50 left-0 h-full',
        showLanding ? 'opacity-100' : 'opacity-0 pointer-events-none',
        didScrollDown ? 'top-0' : 'top-[80px]',
      ])}
      style={{
        willChange:
          'height, top, left, background-color, z-index, pointer-events',
      }}
    >
      <section
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative overflow-x-hidden h-screen scrollbar-hide snap-y snap-mandatory"
      >
        <Section1 className="snap-start" />
        <Section2 className="snap-center" />
        <Section3 className="snap-center" />
        <Section4 className="snap-center" />
        <Section5 className="snap-center" />
        <Section6 className="snap-center" />
        <Section7 className="snap-end" />
      </section>

      <Button
        onClick={() => {
          setShowLanding(false);
        }}
        className={clsx([
          'py-3 fixed xl:bottom-4 xl:right-4 bottom-5 right-1/2 transform translate-x-1/2 xl:transform-none xl:translate-x-0 whitespace-nowrap z-50',
          'transition-all duration-500 ease-in-out',
          didScrolltoBottom ? 'opacity-0 pointer-events-none' : 'opacity-100',
        ])}
      >
        <span>Skip to Dashboard</span>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

export default LandingArea;
