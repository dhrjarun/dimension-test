import { Tuple } from './Tuple';

export interface LabelData {
  id: number;
  name: string;
  projectId: number;
  color: string;
  info?: string;
}

export const labels: Tuple<LabelData, 3> = [
  { id: 1, name: 'Research', color: 'violet', projectId: 1 },
  { id: 2, name: 'UI Design', color: 'blue', projectId: 1 },
  { id: 3, name: 'Planning', color: 'green', projectId: 1 },
];
