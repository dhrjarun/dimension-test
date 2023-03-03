import React from 'react';

export interface TickCircleIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const TickCircleIcon = React.forwardRef<SVGSVGElement, TickCircleIconProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <svg
      ref={ref}
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7.99998 15.1667C4.04665 15.1667 0.833313 11.9533 0.833313 8.00001C0.833313 4.04668 4.04665 0.833344 7.99998 0.833344C11.9533 0.833344 15.1666 4.04668 15.1666 8.00001C15.1666 11.9533 11.9533 15.1667 7.99998 15.1667ZM7.99998 1.83334C4.59998 1.83334 1.83331 4.60001 1.83331 8.00001C1.83331 11.4 4.59998 14.1667 7.99998 14.1667C11.4 14.1667 14.1666 11.4 14.1666 8.00001C14.1666 4.60001 11.4 1.83334 7.99998 1.83334Z"
        fill="#98A5B3"
      />
      <path
        d="M7.05334 10.3867C6.92 10.3867 6.79334 10.3333 6.7 10.24L4.81333 8.35334C4.62 8.16 4.62 7.84 4.81333 7.64667C5.00667 7.45334 5.32667 7.45334 5.52 7.64667L7.05334 9.18L10.48 5.75334C10.6733 5.56 10.9933 5.56 11.1867 5.75334C11.38 5.94667 11.38 6.26667 11.1867 6.46L7.40667 10.24C7.31334 10.3333 7.18667 10.3867 7.05334 10.3867Z"
        fill="#98A5B3"
      />
    </svg>
  );
});
