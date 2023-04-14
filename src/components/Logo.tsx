import clsx from 'clsx';
import Image from 'next/image';
import { ComponentPropsWithRef } from 'react';

export interface LogoProps extends ComponentPropsWithRef<'div'> {
  symbolClassName?: string;
  typoClassName?: string;
}

const Logo: React.FC<LogoProps> = ({
  className,
  symbolClassName,
  typoClassName,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(['flex items-center gap-2 py-2', className])}
    >
      <Image
        className={symbolClassName}
        src="/assets/logo/logo-symbol.png"
        alt="Logo Symbol"
        width={37}
        height={35}
      />
      <Image
        className={typoClassName}
        src="/assets/logo/logo-typo.svg"
        alt="Logo Symbol"
        width={140}
        height={20}
      />
    </div>
  );
};

export default Logo;
