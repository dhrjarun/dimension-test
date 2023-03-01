import React from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';
import clsx from 'clsx';
import { useAvatarGroupContext } from './AvatarGroupProvider';

export interface AvatarProps extends React.ComponentPropsWithoutRef<'div'> {
  /* img src */
  src?: string;

  /* img alt text */
  alt?: string;

  /* img element attributes */
  imageProps?: Record<string, any>;

  /** will be rendered in case of no image or error */
  fallback?: React.ReactNode;
}
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { src, className, alt, imageProps, fallback, ...rest } = props;

  const ctx = useAvatarGroupContext();
  const groupStyles = 'border-2 border-white';

  return (
    <RadixAvatar.Root
      ref={ref}
      style={ctx.withinGroup ? { marginLeft: `-${ctx.spacing}px` } : {}}
      className={clsx(
        'overflow-hidden block select-none bg-transparent p-0 w-[30px] min-w-[30px] h-[30px] rounded-full',
        ctx.withinGroup ? groupStyles : '',
        className
      )}
      {...rest}
    >
      <RadixAvatar.Image alt={alt} src={src} {...imageProps} />
      <RadixAvatar.Fallback
        className={clsx(
          'text-gray-600 bg-gray-300 w-full h-full flex text-xii items-center justify-center'
        )}
      >
        {fallback}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
});
