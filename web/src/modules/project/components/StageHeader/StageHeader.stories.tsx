import React from 'react';
import { StageHeader } from './StageHeader';

export default {
  title: 'web/project/StageHeader',
  component: StageHeader,
};

export function Default() {
  return (
    <div className="w-[320px]">
      <StageHeader
        name="TODO"
        issueCount={2}
        imageUrl="https://picsum.photos/id/859/50"
        color="black"
      />
    </div>
  );
}

export function Blue() {
  return (
    <div className="w-[320px]">
      <StageHeader
        name="In Progress"
        issueCount={2}
        imageUrl="https://picsum.photos/id/39/50"
        color="blue"
      />
    </div>
  );
}

export function Green() {
  return (
    <div className="w-[320px]">
      <StageHeader
        name="Done"
        issueCount={2}
        imageUrl="https://picsum.photos/id/888/50"
        color="green"
      />
    </div>
  );
}
