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
        { name: 'Buy Me A Coffe', id: 1, logo: 'images/project/buy-me-a-coffee.png' },
        { name: 'Dribble', id: 2, logo: 'images/project/dribble.png' },
      ]}
    />
  );
}
