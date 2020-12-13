import React from 'react';
import ItemInterface from '../../models/ItemInterface';

import {
  Wrapper,
  Image,
  Main,
  Name,
  Details,
  Footer,
  AddButton,
  Price,
} from './styles';

const NewItem: React.FC<{ item: ItemInterface }> = ({ item }) => (
  <Wrapper>
    <Image imageUrl={item?.imageUrl} />
    <Main>
      <Name>{item?.name}</Name>
      <Details>{item?.details}</Details>
    </Main>
    <Footer>
      <AddButton />
      <Price>{item.price}</Price>
    </Footer>
  </Wrapper>
);

export default NewItem;
