import styled from 'styled-components';
import { ITweet } from '../../shared/types/tweet';

type ITweetMessage = Pick<ITweet, 'message'>;

const TweetPost = ({ message }: ITweetMessage) => {
  return <StyledPost>{message}</StyledPost>;
};

const StyledPost = styled.p`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;

  @media (min-width: 499px) {
    text-align: left;
  }
`;

export default TweetPost;
