import clsx from 'clsx';
import { ComponentPropsWithRef } from 'react';

import Button from '@/src/components/Button';

export interface ListHeaderProps extends ComponentPropsWithRef<'header'> {}

const ListHeader: React.FC<ListHeaderProps> = ({
  ref,
  className,
  ...props
}) => {
  return (
    <header
      className={clsx(['flex flex-col items-center gap-10', className])}
      {...props}
      ref={ref}
    >
      <h1 className="text-[32px] font-bold text-white">My Cases</h1>
      <nav>
        <div className="flex gap-5 justify-center">
          <Button>as a plaintiff</Button>
          <Button>as a defendant</Button>
        </div>
      </nav>
    </header>
  );
};

export default ListHeader;
