import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Form from './components/Form/Form';
import Hero from './components/Layout/Hero';
import FlexContainer from './components/UI/FlexContainer';
import Modal from './components/UI/Modal';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState('');
  const displaySubmit = (isValid, info) => {
    setIsVisible(isValid);
    setModalInfo(info);
  };

  const { width, height } = useWindowSize();

  return (
    <>
      {isVisible &&
        ReactDOM.createPortal(
          <Modal userLogin={modalInfo} />,
          document.getElementById('modal')
        )}
      {isVisible && <Confetti width={width} height={height} />}
      {!isVisible && (
        <FlexContainer margin={'100px auto'} flexDirection={'row'} gap={'50px'}>
          <Form info={displaySubmit} />
          <Hero />
        </FlexContainer>
      )}
    </>
  );
}

export default App;
