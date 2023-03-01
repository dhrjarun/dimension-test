import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('should render input', () => {
    const { queryByPlaceholderText } = render(
      <Input leftSection="🔎" placeholder="Input-test-placeholder" />
    );

    expect(queryByPlaceholderText('Input-test-placeholder')).not.toBe(null);
  });
  it('should render leftSection if provided', () => {
    const { queryByText } = render(<Input leftSection="🔎" />);

    expect(queryByText('🔎')).not.toBe(null);
  });

  it('should render rightSection if provided', () => {
    const { queryByText } = render(<Input leftSection="👁️" />);

    expect(queryByText('👁️')).not.toBe(null);
  });
});
