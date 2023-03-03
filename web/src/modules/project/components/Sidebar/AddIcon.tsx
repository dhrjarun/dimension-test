import React from 'react';

export interface AddIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const AddIcon = React.forwardRef<SVGSVGElement, AddIconProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <svg
      ref={ref}
      className={className}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.5 9.77344H4.5C4.1925 9.77344 3.9375 9.51844 3.9375 9.21094C3.9375 8.90344 4.1925 8.64844 4.5 8.64844H13.5C13.8075 8.64844 14.0625 8.90344 14.0625 9.21094C14.0625 9.51844 13.8075 9.77344 13.5 9.77344Z"
        fill="#533BE5"
      />
      <path
        d="M9 14.2734C8.6925 14.2734 8.4375 14.0184 8.4375 13.7109V4.71094C8.4375 4.40344 8.6925 4.14844 9 4.14844C9.3075 4.14844 9.5625 4.40344 9.5625 4.71094V13.7109C9.5625 14.0184 9.3075 14.2734 9 14.2734Z"
        fill="#533BE5"
      />
    </svg>
  );
});
