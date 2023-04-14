import clsx from 'clsx';
import { ComponentPropsWithRef } from 'react';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary' | 'gradient' | 'ghost';
  disabled?: boolean;
}

const Button = ({
  variant = 'primary',
  disabled = false,
  className,
  ref,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx([
        'px-4 py-2 gap-2.5 rounded-2xl flex items-center justify-center',
        !disabled &&
          variant === 'primary' &&
          'bg-primary-default text-white hover:bg-primary-100',
        !disabled &&
          variant === 'secondary' &&
          'bg-secondary-default text-white hover:bg-secondary-100',
        !disabled && variant === 'gradient' && 'bg-gradient-type-1 text-white ',
        !disabled &&
          variant === 'ghost' &&
          'bg-transparent text-black hover:bg-gray-light',
        disabled && 'bg-gray-100 text-gray-300 cursor-not-allowed',
        className,
      ])}
      {...props}
      ref={ref}
    />
  );
};

export default Button;
