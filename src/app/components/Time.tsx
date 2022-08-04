import styled from 'styled-components';
import { momentFromNow } from '../shared/utils/useMoment';

const Time = () => {
  const publishDate = [2022, 7, 4, 14, 0, 0];

  return <StyledTime>{momentFromNow(publishDate)}</StyledTime>;
};

const StyledTime = styled.span`
  font-size: 0.9rem;
  margin: 0;
`;

export default Time;
