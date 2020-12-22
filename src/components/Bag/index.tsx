/* eslint-disable prettier/prettier */
// eslint-disable implicit-arrow-linebreak
import React, { useState } from 'react';
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
  CommentTextArea,
} from './styles';

const Bag: React.FC = () => {
  const {
    bagItems,
    totalPrice,
    addCommentToItem,
    lowerBagItemQuantity,
    increaseBagItemQuantity,
  } = useBag();

  const [commentPopup, setCommentPopup] = useState(false);

  const sortBagItems = () => bagItems.sort((a, b) => (a.item.name > b.item.name ? 1 : -1));

  const handleLowerQuantity = (item: BagItemInterface) => {
    if (item.quantity > 0) {
      lowerBagItemQuantity(item);
    }
  };

  const handleIncreaseQuantity = (item: BagItemInterface) => {
    increaseBagItemQuantity(item);
  };

  const handleAddComment = (text: string, item: BagItemInterface) => {
    if (text !== '') {
      addCommentToItem(text, item);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Your bag</Title>
        <ItemsWrapper>
          {bagItems.length &&
            sortBagItems().map(bagItem => (
              <ItemContainer key={bagItem.item?.id}>
                <ItemHeader>
                  <ItemTitle>{bagItem?.item?.name}</ItemTitle>
                  <CommentIcon onClick={() => setCommentPopup(!commentPopup)} />
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
                {commentPopup && (
                  <CommentTextArea
                    value={bagItem.comment}
                    placeholder="Write your comments here"
                    onChange={event => handleAddComment(event.target.value, bagItem)}
                  />
                )}
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
