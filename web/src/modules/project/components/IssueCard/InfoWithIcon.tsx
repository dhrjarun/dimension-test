import React from 'react';
import clsx from 'clsx';

export interface InfoWithIconProps extends React.ComponentPropsWithoutRef<'div'> {
  info?: string | number;
  icon: React.ReactNode;
}

export const InfoWithIcon = React.forwardRef<HTMLDivElement, InfoWithIconProps>((props, ref) => {
  const { info, className, icon, ...rest } = props;

  if (!info) return null;

  return (
    <div ref={ref} className={clsx('flex items-end', className)} {...rest}>
      {icon}
      <span className="ml-1 block leading-none">{info}</span>
    </div>
  );
});
