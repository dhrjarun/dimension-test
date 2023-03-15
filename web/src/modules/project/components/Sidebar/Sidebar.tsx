/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Project } from '../../state';
import { AddIcon } from './AddIcon';

export interface SidebarProps extends React.ComponentPropsWithoutRef<'div'> {
  projects: Project[];
}

// TODO: setup onChange for sidebar
export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  const { className, children, projects, ...rest } = props;
  const currentPathname = usePathname();

  const itemClasses =
    'w-[32px] h-[32px] grid place-items-center bg-gray-100 rounded-lg mx-auto mb-4 relative';

  const selectedItemClasses =
    'border border-primary-500 before:content-[""] before:w-[4px] before:h-[28px] before:absolute before:left-[-15px] before:bg-primary-500 before:rounded-r-lg';

  return (
    <div
      ref={ref}
      className={clsx('border-r border-gray-200 max-w-16 w-14 justify-center h-screen', className)}
      {...rest}
    >
      <img
        key="dimension logo"
        className="block xwaspect-square mx-auto py-3 px-1 mb-3 border-b border-gray-200"
        src="/logo.png"
        alt="Dimension Logo"
      />
      {projects.map((project) => {
        const { pathname: projectPathname } = new URL(project.url);
        const isSelected = currentPathname === projectPathname;

        return (
          <Link
            href={projectPathname}
            key={project.id}
            className={clsx(itemClasses, isSelected ? selectedItemClasses : '')}
          >
            <img
              key={project.id}
              src={project.logoUrl || ''}
              alt={`${project.name} logo`}
              className="block"
            />
          </Link>
        );
      })}

      <button className={clsx(itemClasses)}>
        <AddIcon />
      </button>
    </div>
  );
});
