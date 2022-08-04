import styled from 'styled-components';
import Avatar from './Avatar';

const Tweet = () => {
  return (
    <div className="container">
      <StyledTweet>
        <div className="avatar-wrapper">
          <Avatar />
        </div>
        <div></div>
      </StyledTweet>
    </div>
  );
};

const StyledTweet = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin: 1rem auto;
  width: 100%;
  max-width: 500px;

  .avatar-wrapper {
    border: 1px solid black;
    width: 100%;
    max-width: 80px;
    background-color: lightGray;
  }

  @media (min-width: 375px) {
    justify-content: flex-start;
  }
`;

export default Tweet;
