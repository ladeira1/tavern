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
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.5 }}
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
