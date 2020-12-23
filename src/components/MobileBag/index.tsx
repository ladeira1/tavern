import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BagItem from '../BagItem';
import { useBag } from '../../contexts/bag';
import {
  Container,
  Header,
  BagIcon,
  Price,
  ItemsWrapper,
  CheckoutButton,
  CheckoutTitle,
} from './styles';

const MobileBag: React.FC = () => {
  const { bagItems, sortBagItems, totalPrice } = useBag();
  const [show, setShow] = useState(false);

  const handleShowOrCollapseBag = () => {
    if (bagItems.length) setShow(!show);
  };

  useEffect(() => {
    if (!bagItems.length) {
      setShow(false);
    }
  }, [bagItems]);

  return (
    <Container>
      <Header onClick={handleShowOrCollapseBag}>
        <BagIcon />
        <Price>{totalPrice.toFixed(2)}</Price>
        <h3>Your bag</h3>
      </Header>
      {show && (
        <AnimatePresence initial={false}>
          <ItemsWrapper>
            {bagItems.length &&
              sortBagItems().map(bagItem => (
                <BagItem bagItem={bagItem} key={bagItem.item.id} />
              ))}
          </ItemsWrapper>
          <CheckoutButton>
            <CheckoutTitle>Checkout</CheckoutTitle>
          </CheckoutButton>
        </AnimatePresence>
      )}
    </Container>
  );
};

export default MobileBag;
