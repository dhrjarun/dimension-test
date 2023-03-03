export type LabelType = {
  id: number;
  name: string;
  color: 'red' | 'green' | 'yellow' | 'blue' | 'cyan' | 'violet';
};

export type User = {
  id: number;
  name: string;
  avatarImg: string;
};

export interface IssueData {
  id: number;
  serialNo: number;
  title: string;
  labels: LabelType[];
  body?: { type: 'text' | 'img'; content: string };
  commentCount?: number;
  createdAt?: Date;
  users?: User[];
  linkCount?: number;
  taskCount?: number;
  completedTaskCount?: number;
}
