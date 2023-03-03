import React from 'react';

export interface AddIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const AddIcon = React.forwardRef<SVGSVGElement, AddIconProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <svg
      ref={ref}
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
        fill="#A9B4C0"
      />
      <path
        d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
        fill="#A9B4C0"
      />
    </svg>
  );
});
