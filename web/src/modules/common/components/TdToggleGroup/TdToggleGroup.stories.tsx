import React from 'react';
import { TdToggleGroup } from './TdToggleGroup';
import { TdToggleItem } from './TdToggleItem';

export default {
  title: 'web/common/TdToggleGroup',
  component: TdToggleGroup,
};

export function Default() {
  return (
    <TdToggleGroup defaultValue="good">
      <TdToggleItem value="good">Good</TdToggleItem>
      <TdToggleItem value="bad">Bad</TdToggleItem>
    </TdToggleGroup>
  );
}
