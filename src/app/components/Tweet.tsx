import styled from 'styled-components';
import Avatar from './TweetAvatar/TweetAvatar';
import TweetHeader from './TweetHeader/TweetHeader';
import TweetMessage from './TweetMessage/TweetMessage';
import TweetFooter from './TweetFooter/TweetFooter';
import { SECONDARY_COLOR } from '../shared/utils/styles';
import { ITweet } from '../shared/types/tweet';

type IProps = { tweet: ITweet };

const Tweet = ({ tweet }: IProps) => {
  return (
    <div className="container">
      <StyledTweet>
        <Avatar gravatar={tweet.gravatar} />
        <div className="tweet-content">
          <TweetHeader author={tweet.author} timestamp={tweet.timestamp} />
          <TweetMessage message={tweet.message} />
          <TweetFooter likes={tweet.likes} comments={tweet.comments} retweets={tweet.retweets} />
        </div>
      </StyledTweet>
    </div>
  );
};

const StyledTweet = styled.div`
  border: 2px solid ${SECONDARY_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  margin: 1rem auto;
  width: 100%;
  max-width: 600px;

  .tweet-content {
    margin-top: 1rem;
    width: 100%;
  }

  @media (min-width: 499px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 1rem;

    .tweet-content {
      margin-top: 0;
      padding: 0 1rem;
    }
  }
`;

export default Tweet;
