import { Tuple } from './Tuple';

export interface IssueData {
  id: number;
  number: number;
  title: string;
  stageId: number;
  authorId: number;
  projectId: number;
  thumbnailType?: 'TEXT' | 'IMAGE';
  thumbnail?: string;
  rank: string;
}

export const issues: Tuple<IssueData, 6> = [
  {
    id: 1,
    number: 1,
    title: 'UX Adjustments',
    thumbnailType: 'TEXT',
    thumbnail: 'Make UI/UX revisions for the project management dashboard on Figma.',
    stageId: 1,
    authorId: 1,
    projectId: 1,
    rank: '',
  },
  {
    id: 2,
    number: 2,
    title: 'Moodboards',
    thumbnailType: 'IMAGE',
    thumbnail: 'images/issue/mood-boards.png',
    stageId: 1,
    authorId: 2,
    projectId: 1,
    rank: '',
  },
  {
    id: 3,
    number: 3,
    title: 'Dashboard Design',
    thumbnailType: 'IMAGE',
    thumbnail: 'images/issue/dashboard.png',
    stageId: 2,
    authorId: 3,
    projectId: 1,
    rank: '',
  },
  {
    id: 4,
    number: 4,
    title: 'Design System',
    thumbnailType: 'TEXT',
    thumbnail: 'Create a consistent look and feel both on web and mobile',
    stageId: 2,
    authorId: 4,
    projectId: 1,
    rank: '',
  },
  {
    id: 5,
    number: 5,
    title: 'Presentation',
    thumbnailType: 'TEXT',
    thumbnail:
      'Help business to clearly define their anuual e-commerce digital strategy by creating a high-level plan.',
    stageId: 3,
    authorId: 5,
    projectId: 1,
    rank: '',
  },
  {
    id: 6,
    number: 6,
    title: 'Brainstorming',
    stageId: 3,
    authorId: 6,
    projectId: 1,
    rank: '',
  },
];
