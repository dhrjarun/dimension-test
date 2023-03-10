import { describe, it } from 'vitest';
import { prisma } from '@dimension/db';
import { users } from '@dimension/db/data/';
import { userRouter } from './user-router';

describe('userRouter', () => {
  it('should getMe', async () => {
    const user = users[0];

    const result = await userRouter
      .createCaller({
        prisma,
        session: {
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            avatarUrl: user.avatarUrl,
          },
          expires: '',
        },
      })
      .getMe();

    expect(result).toMatchObject(user);
  });
});
