/* eslint-disable prettier/prettier */
// eslint-disable implicit-arrow-linebreak
import React from 'react';
import { useBag } from '../../contexts/Bag';
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

const Bag: React.FC<{action?: () => void, isEnabled?: boolean}> = ({ action, isEnabled }) => {
  const {
    bagItems,
    totalPrice,
  } = useBag();

  const isButtonDisabled = bagItems.length === 0;

  const handleCheckout = () => {
    if (action) {
      action();
    }
  };

  return (
    <>
      <Container>
      <Wrapper>
        <Title>Your bag</Title>
        <ItemsWrapper>
            {bagItems.length &&
              bagItems.map(bagItem => (
                <BagItem bagItem={bagItem} key={bagItem.item.id} />
              ))}
        </ItemsWrapper>
        <Footer>
          <Price>{totalPrice.toFixed(2)}</Price>
          {isEnabled &&
            <CheckoutButton type="button" onClick={handleCheckout} disabled={isButtonDisabled}>
              <CheckoutTitle>Checkout</CheckoutTitle>
            </CheckoutButton>
          }

        </Footer>
      </Wrapper>
    </Container>
    </>
  );
};

export default Bag;
