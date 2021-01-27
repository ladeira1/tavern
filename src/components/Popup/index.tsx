import React from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Background,
  Container,
  Title,
  Text,
  ButtonWrapper,
  Button,
} from './styles';

const Popup: React.FC<{
  isVisible: boolean;
  setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isVisible, setPopupVisible }) => {
  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleStopPropagation = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <Background onClick={handleClosePopup}>
          <Container
            onClick={handleStopPropagation}
            initial={{ opacity: 0, y: 90, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          >
            <Title>Thanks for buying with us!</Title>
            <Text>Your food will be delivered as soon as possible.</Text>
            <ButtonWrapper>
              <Button onClick={handleClosePopup}>Close</Button>
            </ButtonWrapper>
          </Container>
        </Background>
      )}
    </AnimatePresence>
  );
};

export default Popup;
