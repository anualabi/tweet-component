import Avatar from './TweetAvatar/TweetAvatar';
import TweetHeader from './TweetHeader/TweetHeader';
import TweetMessage from './TweetMessage/TweetMessage';
import { LikeButton, ReplyButton, RetweetButton, ShareButton } from './TweetFooter';
import { ITweet } from '../shared/types/tweet';
import { StyledTweet, StyledTweetButtons } from './TweetStyles';

type IProps = { tweet: ITweet };

const Tweet = ({ tweet }: IProps) => {
  return (
    <div className="container">
      <StyledTweet>
        <Avatar gravatar={tweet.gravatar} />
        <div className="tweet-content">
          <TweetHeader author={tweet.author} timestamp={tweet.timestamp} />
          <TweetMessage message={tweet.message} />
          <StyledTweetButtons>
            <LikeButton likes={tweet.likes} />
            <ReplyButton comments={tweet.comments} />
            <RetweetButton retweets={tweet.retweets} />
            <ShareButton />
          </StyledTweetButtons>
        </div>
      </StyledTweet>
    </div>
  );
};

export default Tweet;
