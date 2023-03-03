import React from 'react';

export interface SearchIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const SearchIcon = React.forwardRef<SVGSVGElement, SearchIconProps>((props, ref) => {
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
        d="M14 14L11.0093 11.004M12.6667 7C12.6667 8.50289 12.0696 9.94423 11.0069 11.0069C9.94423 12.0696 8.50289 12.6667 7 12.6667C5.49711 12.6667 4.05577 12.0696 2.99306 11.0069C1.93036 9.94423 1.33333 8.50289 1.33333 7C1.33333 5.49711 1.93036 4.05577 2.99306 2.99306C4.05577 1.93035 5.49711 1.33333 7 1.33333C8.50289 1.33333 9.94423 1.93035 11.0069 2.99306C12.0696 4.05577 12.6667 5.49711 12.6667 7V7Z"
        stroke="#94989E"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
});
