import { Tuple } from './Tuple';

export interface TaskData {
  id: number;
  title: string;
  issueId: number;
  isDone: boolean;
}

export const tasks: Tuple<TaskData, 5> = [
  {
    id: 1,
    title: 'Task 1',
    issueId: 2,
    isDone: true,
  },
  {
    id: 2,
    title: 'Task 2',
    issueId: 2,
    isDone: false,
  },
  {
    id: 3,
    title: 'Task 3',
    issueId: 2,
    isDone: true,
  },
  {
    id: 4,
    title: 'Task 4',
    issueId: 2,
    isDone: true,
  },
  {
    id: 5,
    title: 'Task 5',
    issueId: 2,
    isDone: false,
  },
];
