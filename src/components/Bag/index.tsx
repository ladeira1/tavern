import React from 'react';
import { useBag } from '../../contexts/bag';
import {
  Container,
  Wrapper,
  Title,
  ItemsWrapper,
  ItemContainer,
  ItemWrapper,
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
} from './styles';

const Bag: React.FC = () => {
  const { bagItems } = useBag();
  console.log(bagItems);
  return (
    <Container>
      <Wrapper>
        <Title>Your bag</Title>
        <ItemsWrapper>
          {bagItems.length &&
            bagItems.map(bagItem => (
              <ItemContainer key={bagItem.item?.id}>
                <ItemWrapper>
                  <ItemHeader>
                    <ItemTitle>{bagItem?.item?.name}</ItemTitle>
                    <CommentIcon />
                  </ItemHeader>
                  <ItemDetails>{bagItem?.item?.details}</ItemDetails>
                  <ItemFooter>
                    <ItemQuantity>
                      <MinusIcon />
                      <ItemCurrentQuantity>
                        {bagItem?.quantity}
                      </ItemCurrentQuantity>
                      <PlusIcon />
                    </ItemQuantity>
                    <ItemPrice>{bagItem?.item?.price}</ItemPrice>
                  </ItemFooter>
                </ItemWrapper>
              </ItemContainer>
            ))}
        </ItemsWrapper>
        <Footer>
          <Price>200.96</Price>
          <CheckoutButton>Checkout</CheckoutButton>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Bag;
