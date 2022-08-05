import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../shared/utils/styles';
import { ITweet } from '../../shared/types/tweet';

type IAuthor = Pick<ITweet, 'author'>;

const Author = ({ author }: IAuthor) => {
  const { name, handle } = author;
  return (
    <StyledAuthor>
      <p className="name">{name}</p>
      <p className="handle">@{handle}</p>
      <span className="dot"></span>
    </StyledAuthor>
  );
};

const StyledAuthor = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin: 0 0 0.5rem;
  text-align: center;

  .name,
  .handle {
    margin: 0;
  }

  .name {
    margin-right: 0.25rem;
  }

  .handle {
    color: ${PRIMARY_COLOR};
  }

  @media (min-width: 499px) {
    flex-direction: row;
    align-items: center;
    margin: 0 0.25rem 0 0;

    .handle {
      margin-right: 0.35rem;
    }

    .dot {
      height: 4px;
      width: 4px;
      background-color: ${PRIMARY_COLOR};
      border-radius: 50%;
      display: inline-block;
    }
  }
`;

export default Author;
