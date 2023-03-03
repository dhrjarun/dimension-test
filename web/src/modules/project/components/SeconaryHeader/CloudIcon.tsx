import React from 'react';

export interface CloudIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const CloudIcon = React.forwardRef<SVGSVGElement, CloudIconProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <svg
      ref={ref}
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3.77547 8.33775C3.06613 8.51624 2.44638 8.94762 2.03266 9.55083C1.61894 10.154 1.43973 10.8876 1.5287 11.6136C1.61767 12.3396 1.96869 13.0082 2.51582 13.4936C3.06295 13.9791 3.76852 14.2481 4.49997 14.25H12.75C13.2795 14.2496 13.8029 14.1371 14.2859 13.9199C14.7688 13.7027 15.2002 13.3856 15.5518 12.9896C15.9033 12.5936 16.167 12.1277 16.3255 11.6224C16.484 11.1171 16.5337 10.5841 16.4713 10.0582C16.4089 9.53237 16.2359 9.0257 15.9636 8.57155C15.6913 8.11741 15.3258 7.72609 14.8914 7.42334C14.457 7.12059 13.9633 6.91329 13.443 6.81507C12.9226 6.71685 12.3874 6.72995 11.8725 6.8535L10.875 7.125"
        fill="#58B2CB"
      />
      <path
        d="M3.77547 8.33775C3.06613 8.51624 2.44638 8.94762 2.03266 9.55083C1.61894 10.154 1.43973 10.8876 1.5287 11.6136C1.61767 12.3396 1.96869 13.0082 2.51582 13.4936C3.06295 13.9791 3.76852 14.2481 4.49997 14.25H12.75C13.2795 14.2496 13.803 14.1371 14.2859 13.9199C14.7688 13.7027 15.2002 13.3856 15.5518 12.9896C15.9033 12.5936 16.167 12.1277 16.3255 11.6224C16.484 11.1171 16.5337 10.5841 16.4713 10.0582C16.4089 9.53237 16.2359 9.0257 15.9636 8.57155C15.6913 8.11741 15.3258 7.72609 14.8914 7.42334C14.4569 7.12059 13.9633 6.91329 13.443 6.81507C12.9226 6.71685 12.3874 6.72995 11.8725 6.8535L10.875 7.125"
        stroke="#58B2CB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8725 6.8535C11.6162 5.83843 10.9834 4.95881 10.1026 4.39295C9.22175 3.82708 8.1587 3.61732 7.12894 3.80618C6.09918 3.99504 5.17975 4.56839 4.55704 5.41001C3.93434 6.25162 3.65494 7.29853 3.7755 8.3385C3.7755 8.3385 3.89025 9 4.125 9.375"
        fill="#58B2CB"
      />
      <path
        d="M11.8725 6.8535C11.6162 5.83843 10.9834 4.95881 10.1026 4.39295C9.22175 3.82708 8.1587 3.61732 7.12894 3.80618C6.09918 3.99504 5.17975 4.56839 4.55704 5.41001C3.93434 6.25162 3.65494 7.29853 3.7755 8.3385C3.7755 8.3385 3.89025 9 4.125 9.375"
        stroke="#58B2CB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
