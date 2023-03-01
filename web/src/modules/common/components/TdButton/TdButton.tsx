import React from 'react';
import clsx from 'clsx';

export interface TdButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export function TdButton(props: TdButtonProps) {
  const { className, children, ...rest } = props;

  return (
    <button
      className={clsx(
        className,
        'text-xiv text-gray-500 font-medium px-2.5 py-2 rounded-lg shadow-[0_5px_0_0px] shadow-gray-200 border-2 border-gray-200 hover:shadow-gray-300 hover:border-gray-300 active:shadow-[inset_0_0] active:translate-y-[5px]'
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
