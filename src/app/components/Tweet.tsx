import styled from 'styled-components';
import Avatar from './Avatar';
import Author from './Author';
import Time from './Tme';

const Tweet = () => {
  return (
    <div className="container">
      <StyledTweet>
        <div className="tweet-avatar">
          <Avatar />
        </div>
        <div className="tweet-content">
          <div className="tweet-content-head">
            <Author />
            <Time />
          </div>
        </div>
      </StyledTweet>
    </div>
  );
};

const StyledTweet = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  margin: 1rem auto;
  width: 100%;
  max-width: 600px;

  .tweet-avatar {
    background-color: lightGray;
    border: 1px solid black;
    margin: auto;
    width: 100%;
    width: 80px;
  }

  .tweet-content {
    margin-top: 1rem;
    width: 100%;

    &-head {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  @media (min-width: 499px) {
    flex-direction: row;
    justify-content: flex-start;

    .tweet-avatar {
      margin: 0;
    }

    .tweet-content {
      margin-top: 0;
      padding: 0 1rem;

      &-head {
        justify-content: space-between;
        flex-direction: row;
      }
    }
  }
`;

export default Tweet;
