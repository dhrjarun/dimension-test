import React from 'react';
import { IssueCard } from './IsuueCard';
import { IssueData } from './types';

export default {
  title: 'web/project/issueCard',
  component: IssueCard,
};

export function Default() {
  const data: IssueData = {
    id: 1,
    serialNo: 1,
    title: 'UX Adjustments',
    users: [
      { name: 'user1', id: 1, avatarImg: 'https://picsum.photos/id/100/200' },
      { name: 'user2', id: 2, avatarImg: 'https://picsum.photos/id/23/200' },
      { name: 'user3', id: 3, avatarImg: 'https://picsum.photos/id/64/200' },
      { name: 'user4', id: 4, avatarImg: 'https://picsum.photos/id/76/200' },
    ],
    commentCount: 3,
    createdAt: new Date(2023, 0),
    labels: [{ name: 'Research', id: 1, color: 'violet' }],
    body: {
      type: 'text',
      content: 'Make UI/UX revision for the project management decision on Figma.',
    },
  };

  return <IssueCard data={data} />;
}

export function WithImage() {
  const data: IssueData = {
    id: 2,
    serialNo: 2,
    title: 'Dashboard Design',
    users: [{ name: 'user1', id: 1, avatarImg: 'https://picsum.photos/200' }],
    commentCount: 3,
    createdAt: new Date(2023, 10),
    labels: [{ name: 'Research', id: 1, color: 'violet' }],
    body: {
      type: 'img',
      content: 'https://picsum.photos/212/80',
    },
  };

  return <IssueCard data={data} />;
}

export function WithoutBody() {
  const data: IssueData = {
    id: 3,
    serialNo: 3,
    title: 'Brainstorming',
    users: [{ name: 'user1', id: 1, avatarImg: 'https://picsum.photos/200' }],
    commentCount: 3,
    createdAt: new Date(2023, 10),
    labels: [{ name: 'Research', id: 1, color: 'violet' }],
  };

  return <IssueCard data={data} />;
}

export function Done() {
  const data: IssueData = {
    id: 3,
    serialNo: 3,
    title: 'Presentation',
    body: {
      type: 'text',
      content: 'Help build a presentation for the project management decision.',
    },
    users: [{ name: 'user1', id: 1, avatarImg: 'https://picsum.photos/200' }],
    commentCount: 3,
    createdAt: new Date(2023, 10),
    labels: [{ name: 'Research', id: 1, color: 'violet' }],
    linkCount: 1,
    taskCount: 4,
    completedTaskCount: 4,
  };

  return <IssueCard data={data} isDone />;
}
