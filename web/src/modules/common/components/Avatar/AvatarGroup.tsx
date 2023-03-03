import React from 'react';
import clsx from 'clsx';
import { AvatarGroupProvider } from './AvatarGroupProvider';
import { Avatar } from './Avatar';

export interface AvatarGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Avatar components */
  children: React.ReactNode;

  /** Negative space between Avatars */
  spacing?: number;

  /** Maximum number of Avatars to show */
  max?: number;
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { children, spacing = -12, max, className, ...rest } = props;

  const totalAvatars = React.Children.count(children);

  const avatars = React.Children.toArray(children).slice(0, max ?? totalAvatars);

  return (
    <AvatarGroupProvider spacing={spacing}>
      <div ref={ref} className={clsx('flex', className)} {...rest}>
        {avatars}
        {avatars.length < totalAvatars && <Avatar fallback={`${totalAvatars - avatars.length}+`} />}
      </div>
    </AvatarGroupProvider>
  );
});

AvatarGroup.displayName = 'AvatarGroup';
