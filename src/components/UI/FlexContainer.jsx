import React from 'react';
import styled from 'styled-components';

const StyledFlexContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Castoro&display=swap');
  margin: ${(props) => props.margin};
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  justify-content: center;
  align-items: center;
`;

function FlexContainer(props) {
  return <StyledFlexContainer {...props}></StyledFlexContainer>;
}

export default FlexContainer;
