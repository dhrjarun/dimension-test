/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import React, { useState } from 'react';
import { AddIcon } from './AddIcon';

export interface SidebarProps extends React.ComponentPropsWithoutRef<'div'> {
  projects: { name: string; id: number; logo: string }[];
  defaultSelectedIndex?: number;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  const { className, children, projects, defaultSelectedIndex = 0, ...rest } = props;

  if (defaultSelectedIndex > projects.length) {
    throw new Error('defaultSelectedIndex is out of range');
  }

  const [activeIndex, setActiveIndex] = useState(defaultSelectedIndex);

  const itemClasses =
    'w-[32px] h-[32px] grid place-items-center bg-gray-100 rounded-lg mx-auto mb-4 relative';

  const selectedItemClasses =
    'border border-primary-500 before:content-[""] before:w-[4px] before:h-[28px] before:absolute before:left-[-15px] before:bg-primary-500 before:rounded-r-lg';

  return (
    <div
      ref={ref}
      className={clsx('border-r border-gray-200 max-w-[60px] justify-center h-screen', className)}
      {...rest}
    >
      <img
        className="block xwaspect-square mx-auto py-3 px-1 mb-3 border-b border-gray-200"
        src="logo.png"
        alt="Dimension Logo"
      />
      {projects.map((project, index) => (
        <button
          className={clsx(itemClasses, activeIndex === index ? selectedItemClasses : '')}
          onClick={() => {
            setActiveIndex(index);
          }}
        >
          <img key={project.id} src={project.logo} alt={`${project.name} logo`} className="block" />
        </button>
      ))}

      <button className={clsx(itemClasses)}>
        <AddIcon />
      </button>
    </div>
  );
});
