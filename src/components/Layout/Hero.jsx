import styled from 'styled-components';
import Image from '../../assets/images/Image.png';

const StyledHero = styled.div`
  width: 395px;
  height: 500px;
  background: center / contain no-repeat url(${Image});
`;

function Hero(props) {
  return <StyledHero {...props} />;
}

export default Hero;
