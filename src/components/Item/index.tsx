import React from 'react';
import { useHistory } from 'react-router-dom';
import ItemInterface from '../../models/ItemInterface';
import { useBag } from '../../contexts/Bag';
import {
  Container,
  ContentWrapper,
  ImageWrapper,
  RightSide,
  Title,
  Details,
  Footer,
  Price,
  AddButton,
  Img,
} from './styles';

const Item: React.FC<{ item: ItemInterface }> = ({ item }) => {
  const history = useHistory();

  const { addItemToBag } = useBag();

  let isHolding = false;

  const handleAddToBag = () => {
    addItemToBag(item);
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault();
    isHolding = true;
    setTimeout(() => {
      if (isHolding) {
        history.push(`/update/item/${item.id}`);
      }
    }, 1500);
  };

  const handleMouseUp = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault();
    isHolding = false;
  };

  return (
    <Container
      variants={{
        open: { scale: 1 },
        collapsed: { scale: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <ContentWrapper onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <ImageWrapper>
          <Img src={item.imageUrl} alt="Item" loading="lazy" />
        </ImageWrapper>
        <RightSide>
          <Title>{item.name}</Title>
          <Details>{item.details}</Details>
          <Footer>
            <Price>{item.price}</Price>
            <AddButton onClick={handleAddToBag} />
          </Footer>
        </RightSide>
      </ContentWrapper>
    </Container>
  );
};

export default Item;
