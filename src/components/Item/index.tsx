import React from 'react';
import ItemInterface from '../../models/ItemInterface';
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

const Item: React.FC<{ item: ItemInterface }> = ({ item }) => (
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
          <AddButton />
        </Footer>
      </RightSide>
    </ContentWrapper>
  </Container>
);

export default Item;
