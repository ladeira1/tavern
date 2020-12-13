import React, { useState } from 'react';
import Item from '../../models/Item';
import {
  Container,
  Title,
  Wrapper,
  LeftButton,
  ItemsContainer,
  ItemsWrapper,
  ButtonsWrapper,
  RightButton,
} from './styles';
import NewItem from '../NewItem';

const NewItems: React.FC<{ items: Item[] }> = ({ items }) => {
  const [scrollX, setScrollX] = useState(-15);

  const handleLeftArrow = () => {
    const width = Math.round(window.innerWidth * 0.7);
    let x = scrollX + Math.round(width / 2);
    if (x > -15) {
      x = -15;
    }

    setScrollX(x);
  };

  const handleRightArrow = () => {
    const width = Math.min(Math.round(window.innerWidth * 0.7), 900);
    let x = scrollX - Math.round(width / 2);

    const listW = items.length * 265;

    if (width - listW > x) {
      x = width - listW;
    }

    setScrollX(x);
  };

  return (
    <Container>
      <Title>Whats new</Title>
      <Wrapper>
        <ItemsContainer>
          <ItemsWrapper marginLeft={scrollX} width={items.length * 210}>
            {items.length &&
              items?.map(item => <NewItem key={item.id} item={item} />)}
          </ItemsWrapper>
        </ItemsContainer>
        <ButtonsWrapper>
          <LeftButton onClick={handleLeftArrow} />
          <RightButton onClick={handleRightArrow} />
        </ButtonsWrapper>
      </Wrapper>
    </Container>
  );
};
export default NewItems;
