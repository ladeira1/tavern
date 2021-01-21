import React, { useState } from 'react';
import ItemInterface from '../../models/ItemInterface';
import { useBag } from '../../contexts/Bag';
import BubbleLoader from '../BubbleLoader';
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
  const [loading, setLoading] = useState(true);
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
          {loading && <BubbleLoader color="#fff" />}
          <img
            src={item.imageUrl}
            onLoad={() => setLoading(false)}
            alt="Item"
            style={{ display: loading ? 'none' : 'block' }}
          />
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
