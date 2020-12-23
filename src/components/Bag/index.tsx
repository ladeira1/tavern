/* eslint-disable prettier/prettier */
// eslint-disable implicit-arrow-linebreak
import React from 'react';
import { AnimatePresence } from 'framer-motion';
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
    sortBagItems,
  } = useBag();

  return (
    <Container>
      <Wrapper>
        <Title>Your bag</Title>
        <ItemsWrapper>
          <AnimatePresence initial={false}>
            {bagItems.length &&
              sortBagItems().map(bagItem => (
                <BagItem bagItem={bagItem} key={bagItem.item.id} />
              ))}
          </AnimatePresence>
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
