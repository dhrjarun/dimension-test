import { prisma } from './prisma-client';
import { labels } from '../data/label';
import { labelsOnIssues } from '../data/label-on-issue';
import { projects } from '../data/project';
import { stages } from '../data/stage';
import { users } from '../data/user';

export async function seedUsers() {
  return prisma.user.createMany({
    data: users,
  });
}

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

export async function seedLabels() {
  return prisma.label.createMany({
    data: labels,
  });
}
async function seedLabelOnIssue() {
  return prisma.labelOnIssue.createMany({
    data: labelsOnIssues,
  });
}

export async function seedAll() {
  return {
    users: await seedUsers(),
    projects: await seedProjects(),
    stages: await seedStages(),
    labels: await seedLabels(),
    labelsOnIssues: await seedLabelOnIssue(),
  };
}
