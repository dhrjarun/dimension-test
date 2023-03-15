import { atom, atomFamily } from 'recoil';
import { IssueRouterOutput, StageRouterOutputs, ProjectRouterOutputs } from '@dimension/api';
import { trpcClient } from '~/utils/api';

export type Issue = IssueRouterOutput['getAllByProjectId'][0];
export type Stage = StageRouterOutputs['getAllByProjectId'][0];
export type Project = ProjectRouterOutputs['getAll'][0];

export const selectedProjectState = atom<Project | null>({
  key: 'selectedProject',
  default: null,
});

export const stagesInOrderState = atomFamily<Stage[], number>({
  key: 'stageOrder',
  default: [],
  effects: (projectId) => [
    ({ setSelf }) => {
      trpcClient.stage.getAllByProjectId.query({ projectId }).then((resp) => {
        const order = resp?.map((stage) => stage);
        setSelf(order);
      });
    },
  ],
});

export const issuesInOrderState = atomFamily<Record<number, Issue[]>, number>({
  key: 'issuesInOrder',
  default: {},
  effects: (projectId) => [
    ({ setSelf }) => {
      trpcClient.issue.getAllByProjectId.query({ projectId }).then((res) => {
        const issueInOrder = res.reduce((acc: Record<number, Issue[]>, issue) => {
          const { stageId } = issue;

          if (!acc[stageId]) {
            acc[stageId] = [];
          }
          acc[stageId]?.push(issue);

          return acc;
        }, {});

        setSelf(issueInOrder);
      });
    },
  ],
});
