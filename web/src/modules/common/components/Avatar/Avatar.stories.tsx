import React from 'react';
import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

export default {
  title: 'web/common/Avatar',
  component: Avatar,
};

export function Image() {
  return <Avatar src="https://picsum.photos/id/64/200" />;
}

export function Fallback() {
  return <Avatar fallback="D" />;
}

export function WithinGroups() {
  return (
    <AvatarGroup>
      <Avatar src="https://picsum.photos/id/582/200" />
      <Avatar src="https://picsum.photos/id/593/200" />
      <Avatar src="https://picsum.photos/id/237/200" />
    </AvatarGroup>
  );
}

export function Max() {
  return (
    <AvatarGroup max={2}>
      <Avatar src="https://picsum.photos/id/582/200" />
      <Avatar src="https://picsum.photos/id/593/200" />
      <Avatar src="https://picsum.photos/id/237/200" />
      <Avatar src="https://picsum.photos/200" />
      <Avatar src="https://picsum.photos/200" />
    </AvatarGroup>
  );
}
