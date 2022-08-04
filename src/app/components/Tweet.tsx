import styled from 'styled-components';
import Avatar from './Avatar';
import Author from './Author';
import Time from './Tme';
import Message from './Message';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import LikeButton from './LikeButton';
import MoreOptionsButton from './MoreOptionsButton';

const Tweet = () => {
  return (
    <div className="container">
      <StyledTweet>
        <div className="tweet-avatar">
          <Avatar />
        </div>
        <div className="tweet-content">
          <div className="tweet-content-header">
            <Author />
            <Time />
          </div>
          <div className="tweet-content-body">
            <Message />
          </div>
          <div className="tweet-content-footer">
            <ReplyButton />
            <RetweetButton />
            <LikeButton />
            <MoreOptionsButton />
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
    border: 1px solid gray;
    margin: auto;
    width: 100%;
    max-width: 80px;
    max-height: 80px;
  }

  .tweet-content {
    margin-top: 1rem;
    width: 100%;

    &-header {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    &-body {
      text-align: center;
    }

    &-footer {
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

      &-header {
        justify-content: space-between;
        flex-direction: row;
      }

      &-body {
        text-align: left;
      }

      &-footer {
        justify-content: start;

        button {
          margin: 0 2rem 0 -1rem;
        }
      }
    }
  }
`;

export default Tweet;
