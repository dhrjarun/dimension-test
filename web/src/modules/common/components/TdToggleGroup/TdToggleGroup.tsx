import React from 'react';
import clsx from 'clsx';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import { ToggleGroupSingleProps } from '@radix-ui/react-toggle-group';
import * as Separator from '@radix-ui/react-separator';

export interface TdToggleGroupProps extends Omit<ToggleGroupSingleProps, 'type'> {}

export const TdToggleGroup = React.forwardRef<HTMLDivElement, TdToggleGroupProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <RadixToggleGroup.Root
      type="single"
      ref={ref}
      className={clsx(
        'inline-flex h-[30px] items-center border border-gray-200 rounded-lg text-xiv text-gray-500 font-medium',
        'shadow-[0_3px_0_0px] shadow-gray-200  hover:shadow-gray-300 hover:border-gray-300 active:shadow-[inset_0_0] active:translate-y-[3px]',
        className
      )}
      {...rest}
    >
      {React.Children.map(children, (child, index) => (
        <>
          {child}
          {index !== React.Children.count(children) - 1 && (
            <Separator.Root orientation="horizontal" className="bg-gray-300 w-px h-2.5 my-auto" />
          )}
        </>
      ))}
    </RadixToggleGroup.Root>
  );
});
