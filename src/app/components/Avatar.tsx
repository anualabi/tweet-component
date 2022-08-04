import styled from 'styled-components';

const Avatar = () => {
  return (
    <StyledAvatar>
      <span className="material-icons">person</span>
    </StyledAvatar>
  );
};

const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  span {
    font-size: 2.5rem;
    padding: 1rem;
  }
`;

export default Avatar;
