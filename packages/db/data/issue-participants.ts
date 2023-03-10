import { comments } from './comment';
import { issues } from './issue';
import { counter } from './utils/counter';

export interface IssueParticipantsData {
  id: number;
  issueId: number;
  userId: number;
  role?: 'CREATOR' | 'COLLABORATOR';
}

const idCounter = counter(Infinity, 0);
const set = new Set<string>();

export const creator: IssueParticipantsData[] = [];
issues.forEach((issue) => {
  const key = `${issue.id}-${issue.authorId}`;
  set.add(key);

  creator.push({
    id: idCounter.next(),
    issueId: issue.id,
    userId: issue.authorId,
    role: 'CREATOR',
  });
});

export const collaborators: IssueParticipantsData[] = [];
comments.forEach((comment) => {
  const key = `${comment.issueId}-${comment.authorId}`;

  if (!set.has(key)) {
    collaborators.push({
      id: idCounter.next(),
      issueId: comment.issueId,
      userId: comment.authorId,
      role: 'COLLABORATOR',
    });
    set.add(key);
  }
});

export const issueParticipants = [...creator, ...collaborators];
