import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.p`
  font-weight: 400;
  font-size: 10px;
  color: red;
`;

function Message(props) {
  return <StyledMessage {...props}></StyledMessage>;
}

export default Message;
