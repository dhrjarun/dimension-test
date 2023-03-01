import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Breadcrumbs } from './Breadcrumbs';

describe('web/common/Breadcrumbs', () => {
  it('should not render separators in case of one item', () => {
    const { container } = render(
      <Breadcrumbs>
        <span>1</span>
      </Breadcrumbs>
    );
    expect(container.querySelector('svg')).toBe(null);
  });
  it('should render separators', () => {
    const { container } = render(
      <Breadcrumbs>
        <span>1</span>
        <span>2</span>
        <span>2</span>
      </Breadcrumbs>
    );
    expect(container.querySelectorAll('svg').length).toBe(2);
  });
});
