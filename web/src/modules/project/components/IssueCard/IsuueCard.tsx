/* eslint-disable @next/next/no-img-element */
import React from 'react';
import clsx from 'clsx';
import { Avatar, AvatarGroup } from '~/modules/common';
import { IssueData } from './types';
import { Label } from './Label';
import { InfoWithIcon } from './InfoWithIcon';
import { CommentIcon } from './icons/CommentIcon';
import { TickCircleIcon } from './icons/TickCircleIcon';
import { LinkIcon } from './icons/LinkIcon';
import { CalenderIcon } from './icons/CalenderIcon';
import { GreenTickCircle } from './icons/GreenTickCircle';

export interface IssueCardProps extends React.ComponentPropsWithoutRef<'div'> {
  data: IssueData;
  isDone?: boolean;
}

export const IssueCard = React.forwardRef<HTMLDivElement, IssueCardProps>((props, ref) => {
  const { data, className, isDone = false, ...rest } = props;

  const {
    serialNo,
    title,
    commentCount,
    linkCount,
    taskCount,
    completedTaskCount,
    createdAt,
    users = [],
    body,
    labels,
  } = data;

  return (
    <div
      ref={ref}
      className={clsx('max-w-[245px] border rounded-lg border-gray-300', className)}
      {...rest}
    >
      <div className="p-3">
        <p className="text-x">FLYTE-{serialNo}</p>

        <h3 className="text-gray-700 text-xvi font-bold py-1.5 tracking-wider">{title}</h3>
        {body && (
          <div className="mb-3 w-full max-h-[80px]">
            {body.type === 'img' ? (
              <img
                src={body.content}
                alt={`${title} body`}
                className="object-cover block w-full rounded-lg"
              />
            ) : (
              <p>{body?.content}</p>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          {labels.map((label) => (
            <Label key={label.id} color={label.color}>
              {label.name}
            </Label>
          ))}
          <AvatarGroup max={3}>
            {users.map((user) => (
              <Avatar src={user.avatarImg} key={user.id} />
            ))}
          </AvatarGroup>
        </div>
      </div>

      <div className="border-t border-gray-300 p-2.5 flex justify-between font-normal">
        <div className="flex items-center gap-2.5">
          <InfoWithIcon info={commentCount} icon={<CommentIcon />} />
          <InfoWithIcon
            info={taskCount && completedTaskCount ? `${completedTaskCount}/${taskCount}` : ''}
            icon={<TickCircleIcon />}
          />
          <InfoWithIcon info={linkCount} icon={<LinkIcon />} />
        </div>
        {isDone ? (
          <InfoWithIcon info="Done" icon={<GreenTickCircle />} />
        ) : (
          <InfoWithIcon
            className="leading-none"
            info={createdAt?.toLocaleString('en-us', { month: 'short', year: '2-digit' })}
            icon={<CalenderIcon />}
          />
        )}
      </div>
    </div>
  );
});
