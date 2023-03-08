import { Tuple } from './Tuple';

export interface ProjectData {
  id: number;
  name: string;
  imageUrl: string;
}
export const projects: Tuple<ProjectData, 4> = [
  { id: 1, name: 'App Circle', imageUrl: 'images/project/app-circle.png' },
  { id: 2, name: 'Dribble', imageUrl: 'images/project/dribble.png' },
  { id: 3, name: 'Buy Me a Coffee', imageUrl: 'images/project/buy-me-a-coffee.png' },
  { id: 4, name: 'Atlassian', imageUrl: 'images/project/atlassian.png' },
];
