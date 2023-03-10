import { Tuple } from './Tuple';
import { comments } from './comment';
import { tasks } from './task';

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
    rank: '0|hzzzzz:',
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
    rank: '0|i00007:',
  },
  {
    id: 3,
    number: 3,
    title: 'Dashboard Design',
    thumbnailType: 'IMAGE',
    thumbnail: 'images/issue/dashboard.png',
    stageId: 2,
    authorId: 2,
    projectId: 1,
    rank: '0|i0000f:',
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
    rank: '0|i0000n:',
  },
  {
    id: 5,
    number: 5,
    title: 'Presentation',
    thumbnailType: 'TEXT',
    thumbnail:
      'Help business to clearly define their anuual e-commerce digital strategy by creating a high-level plan.',
    stageId: 3,
    authorId: 3,
    projectId: 1,
    rank: '0|i0000v:',
  },
  {
    id: 6,
    number: 6,
    title: 'Brainstorming',
    stageId: 3,
    authorId: 5,
    projectId: 1,
    rank: '0|i00013:',
  },
];

export const issuesMap: Record<`id-${number}`, IssueData> = {
  'id-1': issues[0],
  'id-2': issues[1],
  'id-3': issues[2],
  'id-4': issues[3],
  'id-5': issues[4],
  'id-6': issues[5],
};

// TODO test these methods
const commentCountById: { [Key: string]: number } = {};
comments.forEach((comment) => {
  const key = comment.issueId;
  commentCountById[key] = (commentCountById[key] || 0) + 1;
});

const taskCountById: {
  [Key: string]: [number, number];
} = {};
tasks.forEach((task) => {
  const key = task.issueId;
  const totalTask = taskCountById[key]?.at(0) || 0;
  const completedTask = taskCountById[key]?.at(1) || 0;
  taskCountById[key] = [totalTask + 1, completedTask + (task.isDone ? 1 : 0)];
});

interface IssueDataCount {
  id: number;
  taskCount: number;
  commentCount: number;
  taskCompletedCount: number;
}
export const issueDataCounts = issues.map(({ id }) => ({
  id,
  commentCount: commentCountById[id] || 0,
  taskCount: taskCountById[id]?.at(0) || 0,
  taskCompletedCount: taskCountById[id]?.at(1) || 0,
})) as Tuple<IssueDataCount, 6>;

export const issueDataCountsMap: Record<`id-${number}`, IssueDataCount> = {
  'id-1': issueDataCounts[0],
  'id-2': issueDataCounts[1],
  'id-3': issueDataCounts[2],
  'id-4': issueDataCounts[3],
  'id-5': issueDataCounts[4],
  'id-6': issueDataCounts[5],
};
