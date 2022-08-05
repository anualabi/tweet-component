import styled from 'styled-components';
import Author from './Author';
import Time from './Time';
import { ITweet } from '../../shared/types/tweet';

type ITweetHeader = Pick<ITweet, 'author' | 'timestamp'>;

const TweetHeader = ({ author, timestamp }: ITweetHeader) => {
  return (
    <StyledTweetHeader>
      <Author author={author} />
      <Time timestamp={timestamp} />
    </StyledTweetHeader>
  );
};

const StyledTweetHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 499px) {
    flex-direction: row;
    align-items: start;
  }
`;

export default TweetHeader;
