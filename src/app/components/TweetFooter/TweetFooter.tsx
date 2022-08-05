import styled from 'styled-components';
import LikeButton from './LikeButton';
import MoreOptionsButton from './ShareButton';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import { ITweet } from '../../shared/types/tweet';

type ITweetFooter = Pick<ITweet, 'likes' | 'comments' | 'retweets'>;

const TweetFooter = ({ likes, comments, retweets }: ITweetFooter) => {
  return (
    <StyledTweetButtons>
      <ReplyButton comments={comments} />
      <RetweetButton retweets={retweets} />
      <LikeButton likes={likes} />
      <MoreOptionsButton />
    </StyledTweetButtons>
  );
};

const StyledTweetButtons = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0;
    padding: 0;

    span {
      font-size: 1.65rem;
      margin: 0;
      width: 40px;
    }
  }

  @media (min-width: 499px) {
    justify-content: start;

    button {
      margin: 0 2rem 0 -0.75rem;
    }
  }
`;

export default TweetFooter;
