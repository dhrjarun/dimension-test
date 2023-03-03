import React from 'react';
import clsx from 'clsx';

export interface TdButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export function TdButton(props: TdButtonProps) {
  const { className, children, ...rest } = props;

  return (
    <button
      className={clsx(
        'inline-flex h-[30px] items-center px-3 border border-gray-200 rounded-lg text-xiv text-gray-500 font-medium space-x-1.5',
        'shadow-[0_3px_0_0px] shadow-gray-200  hover:shadow-gray-300 hover:border-gray-300 active:shadow-[inset_0_0] active:translate-y-[3px]',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
