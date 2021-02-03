import React from 'react';
import { useHistory } from 'react-router-dom';
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
import { useAuth } from '../../contexts/Auth';

const NewItem: React.FC<{ item: ItemInterface }> = ({ item }) => {
  const history = useHistory();

  const { addItemToBag } = useBag();
  const { isLogged } = useAuth();

  let isHolding = false;

  const handleAddToBag = () => {
    addItemToBag(item);
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (isLogged) {
      event.preventDefault();
      isHolding = true;
      setTimeout(() => {
        if (isHolding) {
          history.push(`/update/item/${item.id}`);
        }
      }, 1500);
    }
  };

  const handleMouseUp = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault();
    isHolding = false;
  };

  return (
    <Wrapper onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <Image src={item?.imageUrl} alt="Item" loading="lazy" />
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
