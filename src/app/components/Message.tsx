import styled from 'styled-components';

const Message = () => {
  return <StyledMessage>I enjoy using react with typescript!</StyledMessage>;
};

const StyledMessage = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

export default Message;
