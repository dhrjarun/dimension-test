import { resetDb, seedAll } from '@dimension/db';

export default async function setup() {
  console.log('global test setup running...');
  await resetDb();
  console.log('DB reset complete.');

  await seedAll();
}
