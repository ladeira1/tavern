/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import ItemInterface from '../../models/ItemInterface';
import Item from '../Item';
import { Container, Title, ItemsWrapper, Footer, ButtonDown, ButtonUp } from './styles';

const Items: React.FC<{ items: ItemInterface[]; title: string }> = ({
  items,
  title,
}) => {
  const [expand, setExpand] = useState(false);

  const handleExpandShrink = () => {
    setExpand(!expand);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <ItemsWrapper>
        {items.length &&
          (expand
            ? items.map(item => <Item item={item} key={item.id} />)
            : items.slice(0, 4).map(item => <Item item={item} key={item.id} />))}
      </ItemsWrapper>
      <Footer />
      {expand ? <ButtonUp onClick={handleExpandShrink} /> :
      <ButtonDown onClick={handleExpandShrink}/>}
    </Container>
  );
};

export default Items;
