import React from 'react';
import ItemInterface from '../../models/ItemInterface';
import {
  Container,
  Title,
  Wrapper,
  ItemsContainer,
  ItemsWrapper,
} from './styles';
import NewItem from '../NewItem';

const NewItems: React.FC<{ items: ItemInterface[] }> = ({ items }) => (
  <Container>
    <Title>Whats new</Title>
    <Wrapper>
      <ItemsContainer>
        <ItemsWrapper>
          {items.length &&
            items?.map(item => <NewItem key={item.id} item={item} />)}
        </ItemsWrapper>
      </ItemsContainer>
    </Wrapper>
  </Container>
);
export default NewItems;
