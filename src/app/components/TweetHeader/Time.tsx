import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../shared/utils/styles';
import { momentFromNow } from '../../shared/utils/useMoment';
import { formatTimeStamp } from '../../shared/utils/helpers';
import { ITweet } from '../../shared/types/tweet';

type ITime = Pick<ITweet, 'timestamp'>;

const Time = ({ timestamp }: ITime) => {
  const publishDate = formatTimeStamp(timestamp);

  return <StyledTime>{momentFromNow(publishDate)}</StyledTime>;
};

const StyledTime = styled.p`
  color: ${PRIMARY_COLOR};
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0;
`;

export default Time;
