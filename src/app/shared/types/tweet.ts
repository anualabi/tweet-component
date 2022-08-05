export interface ITweet {
  message: string;
  gravatar: string;
  author: {
    handle: string;
    name: string;
  };
  likes: number;
  comments: number;
  retweets: number;
  timestamp: string;
}
