import React from 'react';
import { Header } from './Header';

export default {
  title: 'web/project/Header',
  component: Header,
};

export function Default() {
  return (
    <Header
      project={{
        id: 1,
        name: 'Simple Project',
        url: 'https://dimension.dev/projects/simple-project',
      }}
    />
  );
}
