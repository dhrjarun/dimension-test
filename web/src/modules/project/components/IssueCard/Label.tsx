import clsx from 'clsx';
import React from 'react';
import { LabelType } from './types';

interface LabelProps extends React.ComponentPropsWithoutRef<'div'> {
  children: string;
  color: LabelType['color'];
}

export const Label = React.forwardRef<HTMLDivElement, LabelProps>((props, ref) => {
  const { children, color, className, ...rest } = props;

  const colorVariants: Record<LabelProps['color'], string> = {
    red: 'bg-red-100 text-red-500',
    green: 'bg-green-100 text-green-500',
    yellow: 'bg-yellow-100 text-yellow-500',
    blue: 'bg-blue-100 text-blue-500',
    cyan: 'bg-cyan-100 text-cyan-500',
    violet: 'bg-violet-100 text-violet-500',
  };

  return (
    <div
      ref={ref}
      className={clsx(colorVariants[color], 'py-1 px-2 rounded-md font-bold', className)}
      {...rest}
    >
      {children}
    </div>
  );
});
