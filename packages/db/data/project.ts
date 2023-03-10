import { Tuple } from './Tuple';

export interface ProjectData {
  id: number;
  name: string;
  logoUrl: string;
  url: string;
}
export const projects: Tuple<ProjectData, 4> = [
  {
    id: 1,
    name: 'Cloud Platform',
    url: 'https://dimension.dev/projects/cloud-platform',
    logoUrl: '/images/project/app-circle.png',
  },
  {
    id: 2,
    name: 'Dribble',
    logoUrl: '/images/project/dribble.png',
    url: 'https://dimension.dev/projects/dribble',
  },
  {
    id: 3,
    name: 'Buy Me a Coffee',
    logoUrl: '/images/project/buy-me-a-coffee.png',
    url: 'https://dimension.dev/projects/buy-me-a-coffee',
  },
  {
    id: 4,
    name: 'Atlassian',
    logoUrl: '/images/project/atlassian.png',
    url: 'https://dimension.dev/projects/atlassian',
  },
];
