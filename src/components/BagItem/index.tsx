import React, { useState } from 'react';
import BagItemInterface from '../../models/BagItemInterface';
import { useBag } from '../../contexts/Bag';
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

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

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
    addCommentToItem(text, bagItem);
  };

  return (
    <ItemContainer
      key={bagItem.item?.id}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
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
