import React from 'react';

export interface GreenTickCircleProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const GreenTickCircle = React.forwardRef<SVGSVGElement, GreenTickCircleProps>(
  (props, ref) => {
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
          d="M8 1.33334C4.32666 1.33334 1.33333 4.32668 1.33333 8.00001C1.33333 11.6733 4.32666 14.6667 8 14.6667C11.6733 14.6667 14.6667 11.6733 14.6667 8.00001C14.6667 4.32668 11.6733 1.33334 8 1.33334ZM11.1867 6.46668L7.40666 10.2467C7.31333 10.34 7.18666 10.3933 7.05333 10.3933C6.92 10.3933 6.79333 10.34 6.7 10.2467L4.81333 8.36001C4.61999 8.16668 4.61999 7.84668 4.81333 7.65334C5.00666 7.46001 5.32666 7.46001 5.51999 7.65334L7.05333 9.18668L10.48 5.76001C10.6733 5.56668 10.9933 5.56668 11.1867 5.76001C11.38 5.95334 11.38 6.26668 11.1867 6.46668Z"
          fill="#78C552"
        />
      </svg>
    );
  }
);
