import React from 'react';
import clsx from 'clsx';
import { AvatarGroup, Avatar, TdButton, TdToggleGroup, TdToggleItem } from '~/modules/common';
import { CloudIcon } from './CloudIcon';
import { ListIcon } from './ListIcon';
import { CardIcon } from './CardIcon';
import { HeadphoneIcon } from './HeadPhoneIcon';
import { ShareIcon } from './ShareIcon';

export interface SecondaryHeaderProps extends React.ComponentPropsWithoutRef<'div'> {}

export const SecondaryHeader = React.forwardRef<HTMLDivElement, SecondaryHeaderProps>(
  (props, ref) => {
    const { className, children, ...rest } = props;

    return (
      <div
        ref={ref}
        className={clsx(
          'flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white',
          className
        )}
        {...rest}
      >
        <div className="space-x-1.5 flex">
          <TdButton>
            <CloudIcon />
            <span>25%</span>
          </TdButton>
          <TdButton>Filter</TdButton>
        </div>
        <div className="flex space-x-4">
          <AvatarGroup spacing={4}>
            <Avatar />
            <Avatar />
          </AvatarGroup>
          <div className="space-x-2.5 flex">
            <TdToggleGroup defaultValue="list">
              <TdToggleItem value="list">
                <ListIcon />
              </TdToggleItem>
              <TdToggleItem value="card">
                <CardIcon />
              </TdToggleItem>
            </TdToggleGroup>
            <TdButton>
              <HeadphoneIcon />
            </TdButton>
            <TdButton>
              <ShareIcon />
              <span>Share</span>
            </TdButton>
          </div>
        </div>
      </div>
    );
  }
);
