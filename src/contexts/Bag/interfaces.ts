import BagItemInterface from '../../models/BagItemInterface';
import ItemInterface from '../../models/ItemInterface';

export interface BagContextData {
  bagItems: BagItemInterface[];
  totalPrice: number;
  addItemToBag: (item: ItemInterface) => void;
  addCommentToItem: (comment: string, item: BagItemInterface) => void;
  readStoragedItems: () => void;
  lowerBagItemQuantity: (item: BagItemInterface) => void;
}
