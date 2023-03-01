import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'web/common/Breadcrumbs',
  component: Breadcrumbs,
};

export function Default() {
  return (
    <Breadcrumbs>
      <p>Projects</p>
      <p>CloudPlatform</p>
      Dimension
    </Breadcrumbs>
  );
}
