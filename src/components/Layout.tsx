import clsx from 'clsx';
import React, { ComponentPropsWithRef, PropsWithChildren } from 'react';

import Header from '@/src/components/Header';

export interface LayoutProps extends ComponentPropsWithRef<'div'> {
  headerClassName?: ComponentPropsWithRef<'div'>['className'];
  mainClassName?: ComponentPropsWithRef<'div'>['className'];
}

const Layout: React.FC<LayoutProps> = ({
  className,
  headerClassName,
  mainClassName,
  children,
  ...props
}) => {
  return (
    <div className={clsx(['min-h-screen', className])} {...props}>
      <Header className={headerClassName} />
      <div className={mainClassName}>{children}</div>
    </div>
  );
};

export default Layout;
