import styled from 'styled-components';

const Message = styled.p`
  color: ${p => p.theme.colors.colorError};
  font-size: ${p => p.theme.fontSizes.fontSizeMessage}px;
  text-align: center;
`;

export default Message;
