import React from 'react';
import clsx from 'clsx';
import { Breadcrumbs, Input } from '~/modules/common';
import { SearchIcon } from './SearchIcon';
import { Switch } from './Switch';

export interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {
  project: {
    id: number;
    name: string;
    logoUrl?: string | null;
    url: string;
  } | null;
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const { className, project, ...rest } = props;
  return (
    <header
      ref={ref}
      className={clsx('border-b border-gray-200 py-3 flex justify-between px-6', className)}
      {...rest}
    >
      <Breadcrumbs className="font-medium text-xiv">
        <p className="text-gray-700">Projects</p>
        <p className="text-gray-400">
          {project?.name}{' '}
          <span className="font-light bg-gray-100 p-1 rounded-md text-xii">FLYTE</span>
        </p>
      </Breadcrumbs>
      <div className="flex space-x-3">
        <Input placeholder="Search" className="w-[174px]" leftSection={<SearchIcon />} />
        <Switch />
      </div>
    </header>
  );
});
