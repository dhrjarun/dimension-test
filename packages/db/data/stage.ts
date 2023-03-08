import { Tuple } from './Tuple';

export interface StageData {
  id: number;
  title: string;
  projectId: number;
  rank: string;
  imageUrl: string;
}

export const stages: Tuple<StageData, 3> = [
  { id: 1, title: 'TODO', rank: '1', projectId: 1, imageUrl: 'images/todo.png' },
  { id: 2, title: 'IN PROGRESS', rank: '2', projectId: 1, imageUrl: 'images/in-progress.png' },
  { id: 3, title: 'IN PROGRESS', rank: '3', projectId: 1, imageUrl: 'images/in-progress.png' },
];
