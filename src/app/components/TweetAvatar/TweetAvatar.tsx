import styled from 'styled-components';
import { ITweet } from '../../shared/types/tweet';

type IAvatar = Pick<ITweet, 'gravatar'>;

const TweetAvatar = ({ gravatar }: IAvatar) => {
  return (
    <StyledAvatar>
      <img src={gravatar} alt="avatar" className="avatar" />
    </StyledAvatar>
  );
};

const StyledAvatar = styled.div`
  display: flex;

  .avatar {
    border-radius: 5px;
    margin: auto;
    width: 80px;
    height: 80px;

    @media (min-width: 499px) {
      margin: 0;
    }
  }
`;

export default TweetAvatar;
