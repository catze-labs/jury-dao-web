import clsx from 'clsx';
import React, { ComponentProps } from 'react';

import Button from '@/src/components/Button';
import Footer from '@/src/components/Footer';

const Section7: React.FC<ComponentProps<'article'>> = ({ className }) => {
  return (
    <article
      className={clsx(['bg-primary-300 min-h-screen h- relative', className])}
    >
      <div className="container relative pt-[20vh] xl:pt-[10vh]">
        <h2 className="text-[30px] xl:text-[70px] font-bold text-white text-center mb-5">
          Join Now
        </h2>
        <p className="text-base xl:text-xl text-white font-medium tracking-tight text-center mb-14">
          Be a part of something great.
          <br />
          Join now and experience the difference!
        </p>
        <div className="w-full flex justify-center">
          <Button variant="gradient" className="xl:w-32 xl:h-12 justify-center">
            Sign Up
          </Button>
        </div>
      </div>

      <Footer className="absolute bottom-0 left-0 w-full" />
    </article>
  );
};

export default Section7;
