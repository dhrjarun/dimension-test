import { prisma } from './prisma-client';

/* This will delete everything in the database. Throws error if executed in production */
export async function resetDb() {
  if (process.env.NODE_ENV === 'production') {
    throw new Error("Can't reset db in production");
  }

  await prisma.user.deleteMany();
  await prisma.labelOnIssue.deleteMany();
  await prisma.label.deleteMany();
  await prisma.stage.deleteMany();
  await prisma.project.deleteMany();
}
