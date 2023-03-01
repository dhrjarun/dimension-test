import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

describe('web/common/Avatar', () => {
  const orignalGlobalImage = window.Image;

  // https://github.com/radix-ui/primitives/blob/main/packages/react/avatar/src/Avatar.test.tsx#L29-L48
  beforeAll(() => {
    (window.Image as any) = class MockImage {
      // eslint-disable-next-line class-methods-use-this
      onload: () => void = () => {};

      src: string = '';

      constructor() {
        setTimeout(() => {
          this.onload();
        }, 300);
        // eslint-disable-next-line no-constructor-return
        return this;
      }
    };
  });

  afterAll(() => {
    window.Image = orignalGlobalImage;
  });

  it('should pass imageProps to img element', async () => {
    const { findByRole } = render(
      <Avatar imageProps={{ 'data-check': 'passed' }} src="/test.png" />
    );

    const img = await findByRole('img');
    expect(img).toHaveAttribute('data-check', 'passed');
  });
  it('should respect max props', () => {
    const { getAllByTestId } = render(
      <AvatarGroup max={2}>
        <Avatar data-testid="avatar" />
        <Avatar data-testid="avatar" />
        <Avatar data-testid="avatar" />
        <Avatar data-testid="avatar" />
      </AvatarGroup>
    );

    expect(getAllByTestId('avatar').length).toBe(2);
  });

  it('should render all avatars if max is undefined', () => {
    const { getAllByTestId } = render(
      <AvatarGroup>
        <Avatar data-testid="avatar" />
        <Avatar data-testid="avatar" />
        <Avatar data-testid="avatar" />
        <Avatar data-testid="avatar" />
      </AvatarGroup>
    );

    expect(getAllByTestId('avatar').length).toBe(4);
  });
});
