import React from 'react';
import { Input } from './Input';

export default { title: 'web/common/Input', component: Input };

export function Default() {
  return (
    <div className="max-w-sm">
      <Input placeholder="Name" className="mb-3" />
      <Input leftSection="🔎" placeholder="Search" className="mb-3" />
      <Input placeholder="Enter your password" rightSection="👁️" />
    </div>
  );
}
