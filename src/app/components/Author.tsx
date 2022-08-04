import styled from 'styled-components';

const Author = () => {
  return (
    <StyledAuthor>
      <span className="name">Mercy</span>
      <span className="username">@mercytweets</span>
    </StyledAuthor>
  );
};

const StyledAuthor = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0 0 0.5rem;
  text-align: center;

  .name {
    font-weight: bold;
    margin-right: 0.25rem;
  }

  @media (min-width: 499px) {
    flex-direction: row;
    margin: 0;
  }
`;

export default Author;
