/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create 6 users
  await prisma.user.createMany({
    data: Array.from({ length: 6 }).map((_, i) => {
      const number = i + 1;
      return {
        id: number,
        email: 'user1@gmail.com',
        username: `user${number}`,
        name: `User ${number}`,
        avatarUrl: `images/avatar/user${number}.png}`,
      };
    }),
  });

  // create 4 stages
  await prisma.project.createMany({
    data: [
      { id: 1, name: 'App Circle', imageUrl: 'images/project/app-circle.png' },
      { id: 2, name: 'Dribble', imageUrl: 'images/project/dribble.png' },
      { id: 3, name: 'Buy Me a Coffee', imageUrl: 'images/project/buy-me-a-coffee.png' },
      { id: 4, name: 'Atlassian', imageUrl: 'images/project/atlassian.png' },
    ],
  });

  // create 3 stages
  await prisma.stage.createMany({
    data: [
      { id: 1, title: 'TODO', order: 0, projectId: 1, imageUrl: 'images/todo.png' },
      { id: 2, title: 'IN PROGRESS', order: 1, projectId: 1, imageUrl: 'images/in-progress.png' },
      { id: 3, title: 'IN PROGRESS', order: 2, projectId: 1, imageUrl: 'images/in-progress.png' },
    ],
  });

  // create 6 issues
  await prisma.issue.createMany({
    data: [
      {
        id: 1,
        number: 1,
        title: 'UX Adjustments',
        thumbnailType: 'TEXT',
        thumbnail: 'Make UI/UX revisions for the project management dashboard on Figma.',
        stageId: 1,
        authorId: 1,
        projectId: 1,
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
      },
      {
        id: 6,
        number: 6,
        title: 'Brainstorming',
        stageId: 3,
        authorId: 6,
        projectId: 1,
      },
    ],
  });

  // create labels
  await prisma.label.createMany({
    data: [
      { id: 1, name: '1_research', title: 'Research', color: 'violet', projectId: 1 },
      { id: 2, name: '1_ui_design', title: 'UI Design', color: 'blue', projectId: 1 },
      { id: 3, name: '1_planning', title: 'Planning', color: 'green', projectId: 1 },
    ],
  });

  // assign label to issues
  await prisma.labelOnIssue.createMany({
    data: [
      {
        labelId: 1,
        issueId: 1,
        assignedBy: 1,
      },
      {
        labelId: 2,
        issueId: 2,
        assignedBy: 2,
      },
      {
        labelId: 2,
        issueId: 3,
        assignedBy: 3,
      },
      {
        labelId: 2,
        issueId: 4,
        assignedBy: 4,
      },
      {
        labelId: 3,
        issueId: 5,
        assignedBy: 5,
      },
      {
        labelId: 1,
        issueId: 6,
        assignedBy: 6,
      },
    ],
  });

  // create comments
  await prisma.comment.createMany({
    data: [{ id: 1, body: 'comment content', authorId: 1, issueId: 1 }],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
