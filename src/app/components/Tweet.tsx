import Avatar from './TweetAvatar/TweetAvatar';
import { Author, Time } from './TweetHeader';
import TweetMessage from './TweetMessage/TweetMessage';
import { CommentButton, LikeButton, RetweetButton, ShareButton } from './TweetFooter';
import { ITweet } from '../shared/types/tweet';
import { StyledTweet, StyledTweetHeader, StyledTweetButtons } from './TweetStyles';

type IProps = { tweet: ITweet };

const Tweet = ({ tweet }: IProps) => {
  return (
    <div className="container">
      <StyledTweet>
        <Avatar gravatar={tweet.gravatar} />
        <div className="tweet-content">
          <StyledTweetHeader>
            <Author author={tweet.author} />
            <Time timestamp={tweet.timestamp} />
          </StyledTweetHeader>
          <TweetMessage message={tweet.message} />
          <StyledTweetButtons>
            <CommentButton comments={tweet.comments} />
            <RetweetButton retweets={tweet.retweets} />
            <LikeButton likes={tweet.likes} />
            <ShareButton />
          </StyledTweetButtons>
        </div>
      </StyledTweet>
    </div>
  );
};

export default Tweet;
