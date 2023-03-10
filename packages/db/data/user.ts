import { Tuple } from './Tuple';

export interface UserData {
  id: number;
  username: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export const users: Tuple<UserData, 12> = [
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
  {
    id: 7,
    username: 'user7',
    name: 'User 7',
    email: 'user7@dmail.com',
  },
  {
    id: 8,
    username: 'user8',
    name: 'User 8',
    email: 'user8@dmail.com',
  },
  {
    id: 9,
    username: 'user9',
    name: 'User 9',
    email: 'user9@dmail.com',
  },
  {
    id: 10,
    username: 'user10',
    name: 'User 10',
    email: 'user10@dmail.com',
  },
  {
    id: 11,
    username: 'user11',
    name: 'User 11',
    email: 'user11@dmail.com',
  },
  {
    id: 12,
    username: 'user12',
    name: 'User 12',
    email: 'user12@dmail.com',
  },
];
