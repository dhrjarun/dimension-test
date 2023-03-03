import React from 'react';
import clsx from 'clsx';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import { ToggleGroupItemProps } from '@radix-ui/react-toggle-group';

export interface TdToggleItemProps extends ToggleGroupItemProps {}

export const TdToggleItem = React.forwardRef<HTMLButtonElement, TdToggleItemProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <RadixToggleGroup.Item
      ref={ref}
      className={clsx('bg px-1 mx-1.5 h-5 rounded-md data-[state=on]:bg-gray-200', className)}
      {...rest}
    >
      {children}
    </RadixToggleGroup.Item>
  );
});
