import React, { useState } from 'react';
import ItemInterface from '../../models/ItemInterface';
import BubbleLoader from '../BubbleLoader';
import { useBag } from '../../contexts/Bag';

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

const NewItem: React.FC<{ item: ItemInterface }> = ({ item }) => {
  const { addItemToBag } = useBag();

  const [loading, setLoading] = useState(true);

  const handleAddToBag = () => {
    addItemToBag(item);
  };

  return (
    <Wrapper>
      {loading && <BubbleLoader color="#fff" />}
      <Image
        src={item?.imageUrl}
        onLoad={() => setLoading(false)}
        alt="Item"
        isLoaded={!loading}
      />
      <Main>
        <Name>{item?.name}</Name>
        <Details>{item?.details}</Details>
      </Main>
      <Footer>
        <AddButton onClick={handleAddToBag} />
        <Price>{item.price}</Price>
      </Footer>
    </Wrapper>
  );
};

export default NewItem;
