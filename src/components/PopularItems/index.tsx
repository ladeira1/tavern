import React, { useState } from 'react';
import Item from '../../models/Item';
import {
  Container,
  Title,
  Wrapper,
  LeftButton,
  ItemsContainer,
  ItemsWrapper,
  RightButton,
} from './styles';

import PopularItem from '../PopularItem';

const PopularItems: React.FC<{ items: Item[] }> = ({ items }) => {
  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > -15) {
      x = -15;
    }

    setScrollX(x);
  };

  const handleRightArrow = () => {
    const width = window.innerWidth * 0.7;

    let x = scrollX - Math.round(width / 2);
    const listW = items.length * 350;

    if (width - listW > x) {
      x = width - listW;
    }
    setScrollX(x);
  };

  return (
    <Container>
      <Title>Whats popular</Title>
      <Wrapper>
        <LeftButton onClick={handleLeftArrow} />
        <ItemsContainer>
          <ItemsWrapper marginLeft={scrollX} width={items.length * 200}>
            {items.length > 0 &&
              items.map(item => <PopularItem key={item.id} item={item} />)}
          </ItemsWrapper>
        </ItemsContainer>
        <RightButton onClick={handleRightArrow} />
      </Wrapper>
    </Container>
  );
};

export default PopularItems;
