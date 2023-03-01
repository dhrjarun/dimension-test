import React from 'react';

export interface ChevronRightIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const ChevronRightIcon = React.forwardRef<SVGSVGElement, ChevronRightIconProps>(
  (props, ref) => (
    <svg
      ref={ref}
      width="5"
      height="8"
      viewBox="0 0 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.26398 7.104L0.815979 6.656L3.47198 4L0.815979 1.344L1.26398 0.896L4.36798 4L1.26398 7.104Z"
        fill="#6C6F75"
      />
    </svg>
  )
);
