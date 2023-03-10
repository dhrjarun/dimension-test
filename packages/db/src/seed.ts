import { prisma } from './prisma-client';
import { labels } from '../data/label';
import { labelsOnIssues } from '../data/label-on-issue';
import { projects } from '../data/project';
import { stages } from '../data/stage';
import { users } from '../data/user';
import { issues } from '../data/issue';
import { tasks } from '../data/task';
import { comments } from '../data/comment';
import { issueParticipants } from '../data/issue-participants';

export async function seedProjects() {
  return prisma.project.createMany({
    data: projects,
  });
}

export async function seedStages() {
  return prisma.stage.createMany({
    data: stages,
  });
}

export async function seedUsers() {
  return prisma.user.createMany({
    data: users,
  });
}

export async function seedIssues() {
  return prisma.issue.createMany({
    data: issues,
  });
}

export async function seedLabels() {
  return prisma.label.createMany({
    data: labels,
  });
}

export async function seedLabelOnIssue() {
  return prisma.labelOnIssue.createMany({
    data: labelsOnIssues,
  });
}

export async function seedTasks() {
  return prisma.task.createMany({
    data: tasks,
  });
}

export async function seedComments() {
  return prisma.comment.createMany({
    data: comments,
  });
}

export async function seedIssueParticipants() {
  return prisma.issueParticipants.createMany({
    data: issueParticipants,
  });
}

export async function seedAll() {
  return {
    // order of execution matter
    projects: await seedProjects(),
    stages: await seedStages(),
    users: await seedUsers(),
    issues: await seedIssues(),
    labels: await seedLabels(),
    labelsOnIssues: await seedLabelOnIssue(),
    tasks: await seedTasks(),
    comments: await seedComments(),
    issueParticipants: await seedIssueParticipants(),
  };
}
