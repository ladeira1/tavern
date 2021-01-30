import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BagItem from '../BagItem';
import { useBag } from '../../contexts/Bag';
import {
  Container,
  Header,
  BagIcon,
  Price,
  ItemsWrapper,
  CheckoutButton,
  CheckoutTitle,
} from './styles';

const MobileBag: React.FC<{ action?: () => void; isEnabled?: boolean }> = ({
  action,
  isEnabled,
}) => {
  const { bagItems, totalPrice } = useBag();
  const [show, setShow] = useState(false);

  const isButtonDisabled = bagItems.length === 0;

  const handleShowOrCollapseBag = () => {
    if (bagItems.length) setShow(!show);
  };

  const handleAction = () => {
    if (action) {
      action();
    }
  };

  useEffect(() => {
    if (!bagItems.length) {
      setShow(false);
    }
  }, [bagItems]);

  return (
    <Container isExpanded={show}>
      <Header onClick={handleShowOrCollapseBag}>
        <BagIcon />
        <Price>{totalPrice.toFixed(2)}</Price>
        <h3>Your bag</h3>
      </Header>
      {show && (
        <AnimatePresence initial={false}>
          <ItemsWrapper>
            {bagItems.length &&
              bagItems.map(bagItem => (
                <BagItem bagItem={bagItem} key={bagItem.item.id} />
              ))}
          </ItemsWrapper>
          {isEnabled && (
            <CheckoutButton
              onClick={handleAction}
              type="button"
              disabled={isButtonDisabled}
            >
              <CheckoutTitle>Checkout</CheckoutTitle>
            </CheckoutButton>
          )}
        </AnimatePresence>
      )}
    </Container>
  );
};

export default MobileBag;
