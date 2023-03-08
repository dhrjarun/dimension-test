import { Tuple } from './Tuple';

export interface UserData {
  id: number;
  username: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export const users: Tuple<UserData, 6> = [
  {
    id: 1,
    username: 'user1',
    name: 'User 1',
    email: 'user1@dmail.com',
    avatarUrl: '/images/avatar/user1.png',
  },
  {
    id: 2,
    username: 'user2',
    name: 'User 2',
    email: 'user2@dmail.com',
    avatarUrl: '/images/avatar/user2.png',
  },
  {
    id: 3,
    username: 'user3',
    name: 'User 3',
    email: 'user3@dmail.com',
    avatarUrl: '/images/avatar/user3.png',
  },
  {
    id: 4,
    username: 'user4',
    name: 'User 4',
    email: 'user4@dmail.com',
    avatarUrl: '/images/avatar/user4.png',
  },
  {
    id: 5,
    username: 'user5',
    name: 'User 5',
    email: 'user5@dmail.com',
    avatarUrl: '/images/avatar/user5.png',
  },
  {
    id: 6,
    username: 'user6',
    name: 'User 6',
    email: 'user6@dmail.com',
    avatarUrl: '/images/avatar/user6.png',
  },
];
