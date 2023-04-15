import clsx from 'clsx';
import { ComponentPropsWithRef } from 'react';

import Button from '@/src/components/Button';

export interface ListHeaderProps extends ComponentPropsWithRef<'header'> {
  isPublic?: boolean;
}

const ListHeader: React.FC<ListHeaderProps> = ({
  ref,
  className,
  isPublic = false,
  ...props
}) => {
  return (
    <header
      className={clsx(['flex flex-col items-center gap-10', className])}
      {...props}
      ref={ref}
    >
      <h1 className="text-[32px] font-bold text-white">
        {isPublic ? 'Public Cases' : 'My Cases'}
      </h1>
      {!isPublic && (
        <nav>
          <div className="flex gap-5 justify-center">
            <Button>as a plaintiff</Button>
            <Button>as a defendant</Button>
          </div>
        </nav>
      )}
      {isPublic && (
        <p className="text-xl text-white pb-4">check out public cases</p>
      )}
    </header>
  );
};

export default ListHeader;
