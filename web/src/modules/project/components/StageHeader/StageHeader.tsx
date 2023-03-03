/* eslint-disable @next/next/no-img-element */
import React from 'react';
import clsx from 'clsx';
import { AddIcon } from './AddIcon';
import { ThreeDotIcon } from './ThreeDotIcon';

export interface StageHeaderProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: string;
  name: string;
  issueCount: number;
  color: 'black' | 'blue' | 'green';
}

export const StageHeader = React.forwardRef<HTMLDivElement, StageHeaderProps>((props, ref) => {
  const { className, name, color, icon, issueCount } = props;

  const colorVariants = {
    black: 'border-b-black',
    blue: 'border-b-blue-600',
    green: 'border-b-green-600',
  };

  return (
    <div
      ref={ref}
      className={clsx(
        colorVariants[color] || colorVariants.black,
        'flex justify-between items-center border-b-2 pb-3',
        className
      )}
    >
      <div className="flex items-center text-gray-700">
        <img
          src={icon}
          alt={`${name} stage icon`}
          className="object-fill block mr-2 aspect-square w-[18px]"
        />
        <h2 className="font-bold text-xiv">{name.toUpperCase()}</h2>
        <div className="font-bold text-xii px-2.5 py-0.5 bg-gray-100 rounded-lg border border-gray-300 ml-3">
          {issueCount}
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <button>
          <AddIcon />
        </button>
        <ThreeDotIcon />
      </div>
    </div>
  );
});
