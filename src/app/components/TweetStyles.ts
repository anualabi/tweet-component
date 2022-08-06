import styled from 'styled-components';
import { SECONDARY_COLOR } from '../shared/utils/styles';

export const StyledTweet = styled.div`
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

export const StyledTweetHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 499px) {
    flex-direction: row;
    align-items: start;
  }
`;

export const StyledTweetButtons = styled.div`
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
