import React from 'react';

export interface CalenderIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const CalenderIcon = React.forwardRef<SVGSVGElement, CalenderIconProps>((props, ref) => {
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
        d="M5.33331 3.83331C5.05998 3.83331 4.83331 3.60665 4.83331 3.33331V1.33331C4.83331 1.05998 5.05998 0.833313 5.33331 0.833313C5.60665 0.833313 5.83331 1.05998 5.83331 1.33331V3.33331C5.83331 3.60665 5.60665 3.83331 5.33331 3.83331Z"
        fill="#98A5B3"
      />
      <path
        d="M10.6667 3.83331C10.3934 3.83331 10.1667 3.60665 10.1667 3.33331V1.33331C10.1667 1.05998 10.3934 0.833313 10.6667 0.833313C10.94 0.833313 11.1667 1.05998 11.1667 1.33331V3.33331C11.1667 3.60665 10.94 3.83331 10.6667 3.83331Z"
        fill="#98A5B3"
      />
      <path
        d="M5.66667 9.66667C5.58 9.66667 5.49333 9.64668 5.41333 9.61335C5.32667 9.58001 5.26 9.53333 5.19333 9.47333C5.07333 9.34667 5 9.18 5 9C5 8.91334 5.02 8.82667 5.05333 8.74667C5.08667 8.66667 5.13333 8.59334 5.19333 8.52668C5.26 8.46668 5.32667 8.42 5.41333 8.38666C5.65333 8.28666 5.95333 8.34001 6.14 8.52668C6.26 8.65334 6.33333 8.82667 6.33333 9C6.33333 9.04 6.32667 9.08668 6.32 9.13335C6.31333 9.17335 6.3 9.21334 6.28 9.25334C6.26667 9.29334 6.24667 9.33334 6.22 9.37334C6.2 9.40667 6.16667 9.44 6.14 9.47333C6.01333 9.59333 5.84 9.66667 5.66667 9.66667Z"
        fill="#98A5B3"
      />
      <path
        d="M7.99998 9.66664C7.91331 9.66664 7.82665 9.64665 7.74665 9.61332C7.65998 9.57999 7.59331 9.5333 7.52665 9.4733C7.40665 9.34664 7.33331 9.17998 7.33331 8.99998C7.33331 8.91331 7.35331 8.82664 7.38665 8.74664C7.41998 8.66664 7.46665 8.59332 7.52665 8.52665C7.59331 8.46665 7.65998 8.41997 7.74665 8.38663C7.98665 8.27997 8.28665 8.33998 8.47331 8.52665C8.59331 8.65332 8.66665 8.82664 8.66665 8.99998C8.66665 9.03998 8.65998 9.08665 8.65331 9.13332C8.64665 9.17332 8.63331 9.21331 8.61331 9.25331C8.59998 9.29331 8.57998 9.33331 8.55331 9.37331C8.53331 9.40664 8.49998 9.43997 8.47331 9.4733C8.34665 9.5933 8.17331 9.66664 7.99998 9.66664Z"
        fill="#98A5B3"
      />
      <path
        d="M10.3334 9.66664C10.2467 9.66664 10.16 9.64665 10.08 9.61332C9.99335 9.57999 9.92669 9.5333 9.86002 9.4733C9.83335 9.43997 9.80669 9.40664 9.78002 9.37331C9.75335 9.33331 9.73335 9.29331 9.72002 9.25331C9.70002 9.21331 9.68669 9.17332 9.68002 9.13332C9.67335 9.08665 9.66669 9.03998 9.66669 8.99998C9.66669 8.82664 9.74002 8.65332 9.86002 8.52665C9.92669 8.46665 9.99335 8.41997 10.08 8.38663C10.3267 8.27997 10.62 8.33998 10.8067 8.52665C10.9267 8.65332 11 8.82664 11 8.99998C11 9.03998 10.9934 9.08665 10.9867 9.13332C10.98 9.17332 10.9667 9.21331 10.9467 9.25331C10.9334 9.29331 10.9134 9.33331 10.8867 9.37331C10.8667 9.40664 10.8334 9.43997 10.8067 9.4733C10.68 9.5933 10.5067 9.66664 10.3334 9.66664Z"
        fill="#98A5B3"
      />
      <path
        d="M5.66667 12C5.58 12 5.49333 11.98 5.41333 11.9467C5.33333 11.9133 5.26 11.8666 5.19333 11.8066C5.07333 11.68 5 11.5066 5 11.3333C5 11.2466 5.02 11.16 5.05333 11.08C5.08667 10.9933 5.13333 10.92 5.19333 10.86C5.44 10.6133 5.89333 10.6133 6.14 10.86C6.26 10.9867 6.33333 11.16 6.33333 11.3333C6.33333 11.5066 6.26 11.68 6.14 11.8066C6.01333 11.9266 5.84 12 5.66667 12Z"
        fill="#98A5B3"
      />
      <path
        d="M7.99998 12C7.82665 12 7.65331 11.9266 7.52665 11.8066C7.40665 11.68 7.33331 11.5066 7.33331 11.3333C7.33331 11.2466 7.35331 11.16 7.38665 11.08C7.41998 10.9933 7.46665 10.92 7.52665 10.86C7.77331 10.6133 8.22665 10.6133 8.47331 10.86C8.53331 10.92 8.57998 10.9933 8.61331 11.08C8.64665 11.16 8.66665 11.2466 8.66665 11.3333C8.66665 11.5066 8.59331 11.68 8.47331 11.8066C8.34665 11.9266 8.17331 12 7.99998 12Z"
        fill="#98A5B3"
      />
      <path
        d="M10.3334 12C10.16 12 9.98669 11.9267 9.86002 11.8067C9.80002 11.7467 9.75335 11.6733 9.72002 11.5867C9.68669 11.5067 9.66669 11.42 9.66669 11.3333C9.66669 11.2467 9.68669 11.16 9.72002 11.08C9.75335 10.9933 9.80002 10.92 9.86002 10.86C10.0134 10.7067 10.2467 10.6333 10.46 10.68C10.5067 10.6867 10.5467 10.7 10.5867 10.72C10.6267 10.7333 10.6667 10.7533 10.7067 10.78C10.74 10.8 10.7734 10.8333 10.8067 10.86C10.9267 10.9867 11 11.16 11 11.3333C11 11.5067 10.9267 11.68 10.8067 11.8067C10.68 11.9267 10.5067 12 10.3334 12Z"
        fill="#98A5B3"
      />
      <path
        d="M13.6666 6.56H2.33331C2.05998 6.56 1.83331 6.33333 1.83331 6.06C1.83331 5.78666 2.05998 5.56 2.33331 5.56H13.6666C13.94 5.56 14.1666 5.78666 14.1666 6.06C14.1666 6.33333 13.94 6.56 13.6666 6.56Z"
        fill="#98A5B3"
      />
      <path
        d="M10.6667 15.1666H5.33333C2.9 15.1666 1.5 13.7666 1.5 11.3333V5.66665C1.5 3.23331 2.9 1.83331 5.33333 1.83331H10.6667C13.1 1.83331 14.5 3.23331 14.5 5.66665V11.3333C14.5 13.7666 13.1 15.1666 10.6667 15.1666ZM5.33333 2.83331C3.42667 2.83331 2.5 3.75998 2.5 5.66665V11.3333C2.5 13.24 3.42667 14.1666 5.33333 14.1666H10.6667C12.5733 14.1666 13.5 13.24 13.5 11.3333V5.66665C13.5 3.75998 12.5733 2.83331 10.6667 2.83331H5.33333Z"
        fill="#98A5B3"
      />
    </svg>
  );
});
