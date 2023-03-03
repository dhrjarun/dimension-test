import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InfoWithIcon } from './InfoWithIcon';

describe('web/project/infoWithIcon', () => {
  it('should rended if info is provided', () => {
    const { getByTestId } = render(
      <InfoWithIcon data-testid="root" info={2} icon={<div data-testid="icon" />} />
    );

    const root = getByTestId('root');
    expect(root.querySelector('[data-testid="icon"]')).toBeInTheDocument();
  });

  it('should not render if info is not provided', () => {
    const { queryByTestId } = render(<InfoWithIcon data-testid="root" icon={<div />} />);

    expect(queryByTestId('root')).toBe(null);
  });

  it('should not render if empty string is passed', () => {
    const { queryByTestId } = render(<InfoWithIcon data-testid="root" info="" icon={<div />} />);

    expect(queryByTestId('root')).toBe(null);
  });

  it('should not render if null is passed', () => {
    const { queryByTestId } = render(
      // @ts-ignore
      <InfoWithIcon data-testid="root" info={null} icon={<div />} />
    );

    expect(queryByTestId('root')).toBe(null);
  });

  it('should not render if number 0 is passed', () => {
    const { queryByTestId } = render(<InfoWithIcon data-testid="root" info={0} icon={<div />} />);

    expect(queryByTestId('root')).toBe(null);
  });
});
