import { Tuple } from './Tuple';

export interface StageData {
  id: number;
  title: string;
  projectId: number;
  rank: string;
  imageUrl: string;
  color: string;
}

export const stages: Tuple<StageData, 3> = [
  {
    id: 1,
    title: 'TODO',
    rank: '1',
    projectId: 1,
    imageUrl: '/images/todo.png',
    color: 'black',
  },
  {
    id: 2,
    title: 'IN PROGRESS',
    rank: '2',
    projectId: 1,
    imageUrl: '/images/in-progress.png',
    color: 'blue',
  },
  {
    id: 3,
    title: 'Done',
    rank: '3',
    projectId: 1,
    imageUrl: '/images/in-progress.png',
    color: 'green',
  },
];
