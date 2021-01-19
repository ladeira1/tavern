import React from 'react';
import {
  Background,
  Container,
  Title,
  Text,
  ButtonWrapper,
  Button,
} from './styles';

const Popup: React.FC<{
  setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setPopupVisible }) => {
  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleStopPropagation = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return (
    <Background onClick={handleClosePopup}>
      <Container onClick={handleStopPropagation}>
        <Title>Thanks for buying with us!</Title>
        <Text>Your food will be delivered as soon as possible.</Text>
        <ButtonWrapper>
          <Button onClick={handleClosePopup}>Close</Button>
        </ButtonWrapper>
      </Container>
    </Background>
  );
};

export default Popup;
