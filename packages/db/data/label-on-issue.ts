import { Tuple } from './Tuple';

export interface LabelOnIssueData {
  labelId: number;
  issueId: number;
  assignedBy: number;
}

export const labelsOnIssues: Tuple<LabelOnIssueData, 6> = [
  {
    labelId: 1,
    issueId: 1,
    assignedBy: 1,
  },
  {
    labelId: 2,
    issueId: 2,
    assignedBy: 2,
  },
  {
    labelId: 2,
    issueId: 3,
    assignedBy: 3,
  },
  {
    labelId: 2,
    issueId: 4,
    assignedBy: 4,
  },
  {
    labelId: 3,
    issueId: 5,
    assignedBy: 5,
  },
  {
    labelId: 1,
    issueId: 6,
    assignedBy: 6,
  },
];
