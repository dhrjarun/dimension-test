import React from 'react';
import clsx from 'clsx';
import * as RadixSwitch from '@radix-ui/react-switch';
import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';

export interface SwitchProps extends RadixSwitchProps {}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadixSwitch.Root
      ref={ref}
      className={clsx('w-[30px] h-[30px] flex border border-gray-300 rounded-md', className)}
      {...rest}
    >
      <div className="w-4 h-3.5 border border-gray-500 rounded-sm m-auto relative">
        <RadixSwitch.Thumb
          className={clsx(
            'block w-[1px] bg-gray-500 h-full absolute',
            'data-[state=unchecked]:left-1',
            'data-[state=checked]:right-1'
          )}
        />
      </div>
    </RadixSwitch.Root>
  );
});
