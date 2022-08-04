import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import styled from 'styled-components';

const Time = () => {
  return <StyledTime>{formatDistanceToNow(new Date(2022, 7, 4, 2, 0, 0))} ago</StyledTime>;
};

const StyledTime = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

export default Time;
