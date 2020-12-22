/* eslint-disable prettier/prettier */
// eslint-disable implicit-arrow-linebreak
import React from 'react';
import { useBag } from '../../contexts/bag';
import {
  Container,
  Wrapper,
  Title,
  ItemsWrapper,
  Footer,
  Price,
  CheckoutButton,
  CheckoutTitle,
} from './styles';
import BagItem from '../BagItem';

const Bag: React.FC = () => {
  const {
    bagItems,
    totalPrice,
  } = useBag();

  const sortBagItems = () => bagItems.sort((a, b) => (a.item.name > b.item.name ? 1 : -1));

  return (
    <Container>
      <Wrapper>
        <Title>Your bag</Title>
        <ItemsWrapper>
          {bagItems.length &&
            sortBagItems().map(bagItem => (
              <BagItem bagItem={bagItem} />
            ))}
        </ItemsWrapper>
        <Footer>
          <Price>{totalPrice.toFixed(2)}</Price>
          <CheckoutButton>
            <CheckoutTitle>Checkout</CheckoutTitle>
          </CheckoutButton>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Bag;
