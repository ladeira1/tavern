import React from 'react';
import ItemInterface from '../../models/ItemInterface';
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

const NewItem: React.FC<{ item: ItemInterface; addToCart: boolean }> = ({
  item,
  addToCart,
}) => {
  const { addItemToBag } = useBag();

  const handleAddToBag = () => {
    addItemToBag(item);
  };

  return (
    <Wrapper>
      <Image src={item?.imageUrl} alt="Item" loading="lazy" />
      <Main>
        <Name>{item?.name}</Name>
        <Details>{item?.details}</Details>
      </Main>
      <Footer
        style={{ justifyContent: addToCart ? 'space-between' : 'flex-end' }}
      >
        {addToCart && <AddButton onClick={handleAddToBag} />}
        <Price>{item.price}</Price>
      </Footer>
    </Wrapper>
  );
};

export default NewItem;
