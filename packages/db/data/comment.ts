import { Tuple } from './Tuple';
import { counter } from './utils/counter';
import { flattenObjectItems } from './utils/flatten-object-items';

interface GenerateCommentDataParams {
  issues: { [id: number]: { [authorId: number]: number } };
}

/**
 * ```js
 * {issues: {issueId: {authorId: commentCount}}
 * ```
 * `commentCount` is the number of comment of that user on that issue
 */
function generateCommentData(params: GenerateCommentDataParams) {
  const { issues } = params;
  const commentData: CommentData[] = [];

  const idCounter = counter(Infinity, 0);

  Object.entries(issues).forEach(([issueId, authorObj]) => {
    const authorIds = flattenObjectItems(authorObj);

    authorIds.forEach((authorId) => {
      const id = idCounter.next();
      const body = `Comment with id -> ${id}, authorId -> ${authorId} -> issueId -> ${issueId}`;

      commentData.push({
        id,
        authorId,
        body,
        issueId: parseInt(issueId, 10),
      });
    });
  });
  return commentData;
}

export interface CommentData {
  id: number;
  authorId: number;
  body: string;
  issueId: number;
}

export const comments = generateCommentData({
  issues: {
    1: { 1: 3 }, // 3
    2: { 2: 1, 3: 1 }, // 2
    3: { 2: 1, 3: 2, 4: 2 }, // 5
    4: { 2: 2, 3: 2, 4: 2, 7: 3, 8: 1, 9: 2 }, // 12
    5: { 3: 11 }, // 11
    6: { 2: 5, 4: 7 }, // 12
  },
}) as Tuple<CommentData, 45>;
