import React from 'react';
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
} from './styles';

const Item: React.FC<{ item: ItemInterface }> = ({ item }) => {
  const { addItemToBag } = useBag();

  const handleAddToBag = () => {
    addItemToBag(item);
  };

  return (
    <Container
      variants={{
        open: { scale: 1 },
        collapsed: { scale: 0 },
      }}
      transition={{ duration: 0.3 }}
    >
      <ContentWrapper>
        <ImageWrapper>
          <img src={item.imageUrl} alt="Item" />
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
