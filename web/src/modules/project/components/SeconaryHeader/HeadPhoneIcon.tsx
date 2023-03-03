import React from 'react';

export interface HeadPhoneIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const HeadphoneIcon = React.forwardRef<SVGSVGElement, HeadPhoneIconProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <svg
      ref={ref}
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect width="14" height="14" fill="white" />
      <path
        d="M1.75 10.5V7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7V10.5"
        stroke="#5C6066"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.25 11.0833C12.25 11.3927 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H10.5C10.1906 12.25 9.89383 12.1271 9.67504 11.9083C9.45625 11.6895 9.33333 11.3927 9.33333 11.0833V9.33333C9.33333 9.02391 9.45625 8.72717 9.67504 8.50837C9.89383 8.28958 10.1906 8.16666 10.5 8.16666H12.25V11.0833ZM1.75 11.0833C1.75 11.3927 1.87292 11.6895 2.09171 11.9083C2.3105 12.1271 2.60725 12.25 2.91667 12.25H3.5C3.80942 12.25 4.10617 12.1271 4.32496 11.9083C4.54375 11.6895 4.66667 11.3927 4.66667 11.0833V9.33333C4.66667 9.02391 4.54375 8.72717 4.32496 8.50837C4.10617 8.28958 3.80942 8.16666 3.5 8.16666H1.75V11.0833Z"
        stroke="#5C6066"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
