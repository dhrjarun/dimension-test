import { prisma } from '@dimension/db';

export type IssuesCountDataQueryResult = {
  commentCount: BigInt;
  taskCount: BigInt;
  taskCompletedCount: BigInt;
}[];
export function issuesCountDataQuery({ issueIds }: { issueIds: number[] }) {
  if (issueIds.length === 0) return Promise.resolve([]);
  const queryString = `
SELECT
Issue.id,
(SELECT COUNT(*) FROM Comment WHERE Comment.issueId = Issue.id) AS commentCount,
(SELECT COUNT(*) FROM Task WHERE Task.issueId = Issue.id) AS taskCount,
(SELECT COUNT(*) FROM Task WHERE Task.issueId = Issue.id AND Task.isDone = true) AS taskCompletedCount
FROM Issue
WHERE Issue.id IN (${issueIds.join(', ')})
ORDER BY Issue.rank ASC;
  `;
  return prisma.$queryRawUnsafe<IssuesCountDataQueryResult>(queryString);
}
