import { Tuple } from './Tuple';

export interface LabelData {
  id: number;
  name: string;
  projectId: number;
  color: string;
  info?: string;
}

export const labels: Tuple<LabelData, 3> = [
  { id: 1, name: '1_research', color: 'violet', projectId: 1 },
  { id: 2, name: '1_ui_design', color: 'blue', projectId: 1 },
  { id: 3, name: '1_planning', color: 'green', projectId: 1 },
];
