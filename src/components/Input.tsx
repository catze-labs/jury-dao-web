import clsx from 'clsx';
import React, { ComponentPropsWithRef } from 'react';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  variant?: 'form' | 'comment';
  label?: string;
}

const Input: React.FC<InputProps> = ({
  variant = 'form',
  label,
  className,
  ref,
  ...props
}) => {
  return (
    <label
      className={`flex flex-col ${
        variant === 'comment' ? 'gap-[10px]' : 'gap-[5px]'
      }`}
    >
      <span
        className={clsx([
          variant === 'comment' && 'text-[#092F5C] font-medium text-sm',
          variant === 'form' && 'text-[#F5F5F5] font-medium text-sm',
        ])}
      >
        {variant === 'comment' ? '*Comment' : label}
      </span>
      <input
        className={clsx([
          'placeholder-[#D9D9D9] px-5 py-2.5 rounded-[16px] bg-[#F5F5F5]',
          variant === 'comment' && 'w-full h-10 border border-[#4D94E7]',
          variant === 'form' && 'lg:min-w-[412px] w-[250px] h-[55px]',
          className
        ])}
        {...props}
      />
    </label>
  );
};

export default Input;
