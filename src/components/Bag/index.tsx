import React from 'react';
import { useBag } from '../../contexts/bag';
import BagItemInterface from '../../models/BagItemInterface';
import {
  Container,
  Wrapper,
  Title,
  ItemsWrapper,
  ItemContainer,
  ItemHeader,
  ItemTitle,
  CommentIcon,
  ItemDetails,
  ItemFooter,
  ItemQuantity,
  MinusIcon,
  ItemCurrentQuantity,
  PlusIcon,
  ItemPrice,
  Footer,
  Price,
  CheckoutButton,
  CheckoutTitle,
} from './styles';

const Bag: React.FC = () => {
  const {
    bagItems,
    totalPrice,
    lowerBagItemQuantity,
    increaseBagItemQuantity,
  } = useBag();

  const handleLowerQuantity = (item: BagItemInterface) => {
    if (item.quantity > 0) {
      lowerBagItemQuantity(item);
    }
  };

  const handleIncreaseQuantity = (item: BagItemInterface) => {
    increaseBagItemQuantity(item);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Your bag</Title>
        <ItemsWrapper>
          {bagItems.length &&
            bagItems.map(bagItem => (
              <ItemContainer key={bagItem.item?.id}>
                <ItemHeader>
                  <ItemTitle>{bagItem?.item?.name}</ItemTitle>
                  <CommentIcon />
                </ItemHeader>
                <ItemDetails>{bagItem?.item?.details}</ItemDetails>
                <ItemFooter>
                  <ItemQuantity>
                    <MinusIcon onClick={() => handleLowerQuantity(bagItem)} />
                    <ItemCurrentQuantity>
                      {bagItem?.quantity}
                    </ItemCurrentQuantity>
                    <PlusIcon onClick={() => handleIncreaseQuantity(bagItem)} />
                  </ItemQuantity>
                  <ItemPrice>
                    {(bagItem?.item?.price * bagItem.quantity).toFixed(2)}
                  </ItemPrice>
                </ItemFooter>
              </ItemContainer>
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
