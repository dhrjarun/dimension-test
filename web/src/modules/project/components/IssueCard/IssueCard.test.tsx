import { render } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { IssueCard } from './IsuueCard';
import { Issue } from '../../state';

const defaultData = {
  id: 1,
  number: 1,
  title: 'card title',
  createdAt: new Date(2023, 0),
  thumbnailType: 'TEXT',
  thumbnail: 'card body',
  labels: [],
  participants: [],
} as unknown as Issue;

describe('web/project/IssueCard', () => {
  it('should render calender when it is not `Done`', () => {
    const { queryByText } = render(<IssueCard data={defaultData} />);
    expect(queryByText('Jan 23')).not.toBe(null);
    expect(queryByText('Done')).toBe(null);
  });
  it('should not render calender when it is `Done`', () => {
    const { queryByText } = render(<IssueCard data={defaultData} isDone />);
    expect(queryByText('Jan 23')).toBe(null);
    expect(queryByText('Done')).not.toBe(null);
  });

  it('should render `p` in the body', () => {
    const { queryByText } = render(<IssueCard data={defaultData} />);
    expect(queryByText('card body')).not.toBe(null);
  });
});
