import clsx from 'clsx';
import React from 'react';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, leftSection, rightSection, ...rest } = props;

  return (
    <div className={clsx('flex bg-gray-100 h-[32px] rounded-lg px-3', className)}>
      {leftSection && <div className="mr-2 grid content-center">{leftSection}</div>}
      <input
        ref={ref}
        className="bg-transparent grow h-full focus-visible:outline-none font-medium text-xii tracking-wide"
        {...rest}
      />
      {rightSection && <div className="ml-2 grid content-center">{rightSection}</div>}
    </div>
  );
});

Input.displayName = 'Input';
