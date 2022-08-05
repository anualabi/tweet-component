import { ITweet } from '../types/tweet';

export const post: ITweet = {
  message: 'I enjoy using react with typescript!',
  gravatar: 'https://en.gravatar.com/avatar/',
  author: {
    handle: 'mrsmith',
    name: 'John Smith'
  },
  likes: 30,
  comments: 51,
  retweets: 9,
  timestamp: '2022-07-04 14:00:02'
};
