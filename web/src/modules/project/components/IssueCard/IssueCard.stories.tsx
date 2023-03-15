import React from 'react';
import { IssueCard } from './IsuueCard';
import { Issue } from '../../state';

export default {
  title: 'web/project/issueCard',
  component: IssueCard,
};

const defaultProps = {
  commentCount: 0,
  taskCount: 0,
  taskCompletedCount: 0,
  description: '',
  authorId: 1,
  projectId: 1,
  rank: '',
  stageId: 1,
  updatedAt: new Date(),
  participants: [],
  labels: [],
  thumbnailType: null,
  thumbnail: null,
};

export function Default() {
  const data: Issue = {
    ...defaultProps,
    id: 1,
    number: 1,
    title: 'UX Adjustments',
    participants: [
      { name: 'user1', id: 1, avatarUrl: 'https://picsum.photos/id/100/200' },
      { name: 'user2', id: 2, avatarUrl: 'https://picsum.photos/id/23/200' },
      { name: 'user3', id: 3, avatarUrl: 'https://picsum.photos/id/64/200' },
      { name: 'user4', id: 4, avatarUrl: 'https://picsum.photos/id/76/200' },
    ],
    createdAt: new Date(2023, 0),
    labels: [{ name: 'Research', id: 1, color: 'violet' }],
    thumbnailType: 'TEXT',
    thumbnail: 'Make UI/UX revision for the project management decision on Figma.',
  };

  return <IssueCard data={data} />;
}

export function WithImageThumbnail() {
  const data: Issue = {
    ...defaultProps,
    id: 2,
    number: 2,
    title: 'Dashboard Design',
    participants: [{ name: 'user1', id: 1, avatarUrl: 'https://picsum.photos/200' }],
    commentCount: 3,
    createdAt: new Date(2023, 10),
    labels: [{ name: 'Research', id: 1, color: 'violet' }],
    thumbnailType: 'IMAGE',
    thumbnail: 'https://picsum.photos/212/80',
  };

  return <IssueCard data={data} />;
}

export function WithoutThumbnail() {
  const data: Issue = {
    ...defaultProps,
    id: 3,
    number: 3,
    title: 'Brainstorming',
    participants: [{ name: 'user1', id: 1, avatarUrl: 'https://picsum.photos/200' }],
    commentCount: 3,
    createdAt: new Date(2023, 10),
    labels: [{ name: 'Research', id: 1, color: 'violet' }],
  };

  return <IssueCard data={data} />;
}

export function Done() {
  const data: Issue = {
    ...defaultProps,
    id: 3,
    number: 3,
    title: 'Presentation',
    thumbnailType: 'TEXT',
    thumbnail: 'Help build a presentation for the project management decision.',
    participants: [{ name: 'user1', id: 1, avatarUrl: 'https://picsum.photos/200' }],
    commentCount: 3,
    createdAt: new Date(2023, 10),
    labels: [{ name: 'Research', id: 1, color: 'violet' }],
    taskCount: 4,
    taskCompletedCount: 4,
  };

  return <IssueCard data={data} isDone />;
}
