import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Droppable, Draggable, DragDropContext, DropResult } from 'react-beautiful-dnd';
import clsx from 'clsx';
import { StageHeader } from '../StageHeader';
import { issuesInOrderState, Issue, Stage, stagesInOrderState, Project } from '../../state';
import { IssueCard, IssueCardProps } from '../IssueCard';
import { trpcClient } from '~/utils/api';

export interface StageColumnProps {
  data: {
    id: number;
    name: string;
  };
}

interface ItemProps extends IssueCardProps {
  index: number;
}
export function Item({ index, className, data, ...rest }: ItemProps) {
  if (!data) return null;

  return (
    <Draggable draggableId={data.id.toString()} index={index}>
      {(itemProvider, snapshot) => (
        <div
          className="mb-5"
          ref={itemProvider.innerRef}
          {...itemProvider.draggableProps}
          {...itemProvider.dragHandleProps}
        >
          <IssueCard
            data={data}
            {...rest}
            className={clsx(
              snapshot.isDragging && !snapshot.isDropAnimating ? 'bg-white rotate-6' : '',
              className
            )}
          />
        </div>
      )}
    </Draggable>
  );
}

export function Column({
  stage,
  issues = [],
  isLast = false,
}: {
  isLast?: boolean;
  stage: Stage;
  issues: Issue[] | undefined;
}) {
  if (!stage) return null;

  const { title, color, imageUrl } = stage;
  return (
    <div className="w-[245px] h-full">
      <StageHeader name={title} color={color} imageUrl={imageUrl} issueCount={issues.length} />
      <Droppable droppableId={stage.id.toString()}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {issues.map((issue, index) => (
              <Item data={issue} index={index} key={issue.id} isDone={isLast} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export interface BoardProps extends React.ComponentPropsWithoutRef<'div'> {
  selectedProject: Project;
}
export function Board(props: BoardProps) {
  const { selectedProject, className, ...rest } = props;
  const stagesInOrder = useRecoilValue(stagesInOrderState(selectedProject.id));
  const [issuesInOrder, setIssuesInOrder] = useRecoilState(issuesInOrderState(selectedProject?.id));

  const handleDragEnd = async (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      const homeOrder = issuesInOrder[Number(source.droppableId)];
      if (!homeOrder) return;

      const newOrder = Array.from(homeOrder);
      const [draggedIssue] = newOrder.splice(source.index, 1);
      if (!draggedIssue) return;

      newOrder.splice(destination.index, 0, draggedIssue);
      setIssuesInOrder((prev) => ({
        ...prev,
        [Number(source.droppableId)]: newOrder,
      }));

      const afterIssue = newOrder[destination.index - 1];
      const beforeIssue = newOrder[destination.index + 1];
      await trpcClient.issue.changeRank
        .mutate({
          issueId: draggedIssue.id,
          after: afterIssue?.id,
          before: beforeIssue?.id,
        })
        .then(() => {})
        .catch(() => {
          setIssuesInOrder((prev) => ({
            ...prev,
            [Number(source.droppableId)]: homeOrder,
          }));
        });

      return;
    }

    const homeOrder = issuesInOrder[Number(source.droppableId)];
    const foreignOrder = issuesInOrder[Number(destination.droppableId)];
    if (!homeOrder || !foreignOrder) return;

    const newHomeOrder = Array.from(homeOrder);
    const [draggedIssue] = newHomeOrder.splice(source.index, 1);
    if (!draggedIssue) return;

    const newForeignOrder = Array.from(foreignOrder);
    newForeignOrder.splice(destination.index, 0, draggedIssue);
    setIssuesInOrder((prev) => ({
      ...prev,
      [Number(source.droppableId)]: newHomeOrder,
      [Number(destination.droppableId)]: newForeignOrder,
    }));

    const afterIssue = newForeignOrder[destination.index - 1];
    const beforeIssue = newForeignOrder[destination.index + 1];
    await trpcClient.issue.changeRank
      .mutate({
        newStageId: Number(destination.droppableId),
        issueId: draggedIssue.id,
        after: afterIssue?.id,
        before: beforeIssue?.id,
      })
      .then(() => {})
      .catch(() => {
        setIssuesInOrder((prev) => ({
          ...prev,
          [Number(source.droppableId)]: homeOrder,
          [Number(destination.droppableId)]: foreignOrder,
        }));
      });
  };

  return (
    <div className={clsx('flex space-x-9 p-6', className)} {...rest}>
      <DragDropContext onDragEnd={handleDragEnd}>
        {stagesInOrder.map((stage, index) => (
          <Column
            key={stage.id}
            stage={stage}
            issues={issuesInOrder[stage.id]}
            isLast={index + 1 === stagesInOrder.length}
          />
        ))}
      </DragDropContext>
    </div>
  );
}
