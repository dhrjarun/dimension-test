import React from 'react';
import { Sidebar } from './Sidebar';

export default {
  title: 'web/project/Sidebar',
  component: Sidebar,
};

export function Default() {
  return (
    <Sidebar
      projects={[
        {
          name: 'Buy Me A Coffe',
          id: 1,
          logoUrl: 'images/project/buy-me-a-coffee.png',
          url: 'https://dimension.dev/project/buy-me-a-coffee',
          createdAt: new Date(),
        },
        {
          name: 'Dribble',
          id: 2,
          logoUrl: 'images/project/dribble.png',
          url: 'https://dimension.dev/project/dribble',
          createdAt: new Date(),
        },
      ]}
    />
  );
}
