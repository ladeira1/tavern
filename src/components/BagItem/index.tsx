import React, { useState } from 'react';
import BagItemInterface from '../../models/BagItemInterface';
import { useBag } from '../../contexts/bag';
import {
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
  CommentTextArea,
} from './styles';

const BagItem: React.FC<{ bagItem: BagItemInterface }> = ({ bagItem }) => {
  const {
    addCommentToItem,
    lowerBagItemQuantity,
    increaseBagItemQuantity,
  } = useBag();

  const [commentPopup, setCommentPopup] = useState(false);

  const handleLowerQuantity = () => {
    if (bagItem.quantity > 0) {
      lowerBagItemQuantity(bagItem);
    }
  };

  const handleIncreaseQuantity = () => {
    increaseBagItemQuantity(bagItem);
  };

  const handleAddComment = (text: string) => {
    if (text !== '') {
      addCommentToItem(text, bagItem);
    }
  };

  return (
    <ItemContainer key={bagItem.item?.id}>
      <ItemHeader>
        <ItemTitle>{bagItem?.item?.name}</ItemTitle>
        <CommentIcon onClick={() => setCommentPopup(!commentPopup)} />
      </ItemHeader>
      <ItemDetails>{bagItem?.item?.details}</ItemDetails>
      <ItemFooter>
        <ItemQuantity>
          <MinusIcon onClick={handleLowerQuantity} />
          <ItemCurrentQuantity>{bagItem?.quantity}</ItemCurrentQuantity>
          <PlusIcon onClick={handleIncreaseQuantity} />
        </ItemQuantity>
        <ItemPrice>
          {(bagItem?.item?.price * bagItem.quantity).toFixed(2)}
        </ItemPrice>
      </ItemFooter>
      {commentPopup && (
        <CommentTextArea
          value={bagItem.comment}
          placeholder="Write your comments here"
          onChange={event => handleAddComment(event.target.value)}
        />
      )}
    </ItemContainer>
  );
};

export default BagItem;
