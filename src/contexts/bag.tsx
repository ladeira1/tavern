import React, { createContext, useContext, useState } from 'react';
import ItemInterface from '../models/ItemInterface';
import BagItemInterface from '../models/BagItemInterface';

interface BagContextData {
  bagItems: BagItemInterface[];
  totalPrice: number;
  addItemToBag: (item: ItemInterface) => void;
  readStoragedItems: () => void;
  lowerBagItemQuantity: (item: BagItemInterface) => void;
  increaseBagItemQuantity: (item: BagItemInterface) => void;
}

const BagContext = createContext<BagContextData>({} as BagContextData);

const BagProvider: React.FC = ({ children }) => {
  const [bagItems, setBagItems] = useState<BagItemInterface[]>(
    [] as BagItemInterface[],
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const saveStoragedItems = (
    sourceItems: BagItemInterface[],
    item: BagItemInterface | null,
  ) => {
    const newStoragedItems =
      item !== null ? sourceItems.concat(item) : sourceItems;
    localStorage.setItem('@bag:bagItem', JSON.stringify(newStoragedItems));
  };

  const updateTotalPrice = (price: number) => {
    localStorage.setItem(
      '@bag:totalPrice',
      JSON.stringify(Number(totalPrice.toFixed(2)) + Number(price)),
    );
    setTotalPrice(Number(totalPrice.toFixed(2)) + Number(price));
  };

  const addItemToBag = (item: ItemInterface) => {
    const data = {
      item,
      quantity: 1,
    };
    let existsInBag: BagItemInterface | null = null;

    bagItems.forEach(bagItem => {
      if (bagItem.item.id === item.id) {
        existsInBag = {
          item: bagItem.item,
          quantity: bagItem.quantity + 1,
        };
      }
    });

    if (existsInBag) {
      const updatedItems: BagItemInterface[] = [];

      bagItems.forEach(bagItem => {
        if (bagItem.item.id !== item.id) {
          updatedItems.push(bagItem);
        }
      });

      setBagItems([...updatedItems, existsInBag]);
      saveStoragedItems(updatedItems, existsInBag);
    } else {
      setBagItems([...bagItems, data]);
      saveStoragedItems(bagItems, data);
    }

    updateTotalPrice(item.price);
  };

  const readStoragedItems = () => {
    const storagedItems = localStorage.getItem('@bag:bagItem');
    const storagedTotalPrice = localStorage.getItem('@bag:totalPrice');
    if (storagedItems && storagedTotalPrice) {
      setBagItems(JSON.parse(storagedItems));
      setTotalPrice(JSON.parse(storagedTotalPrice));
    }
  };

  const lowerBagItemQuantity = (item: BagItemInterface) => {
    const updatedItems: BagItemInterface[] = [];

    bagItems.forEach(bagItem => {
      if (bagItem.item.id !== item.item.id) {
        updatedItems.push(bagItem);
      }
    });

    if (item.quantity > 1) {
      const temp = {
        item: item.item,
        quantity: item.quantity - 1,
      };

      setBagItems([...updatedItems, temp]);
      saveStoragedItems(updatedItems, temp);
    } else {
      setBagItems(updatedItems);
      saveStoragedItems(updatedItems, null);
    }

    updateTotalPrice(-item.item.price);
  };

  const increaseBagItemQuantity = (item: BagItemInterface) => {
    const updatedItems: BagItemInterface[] = [];

    bagItems.forEach(bagItem => {
      if (bagItem.item.id !== item.item.id) {
        updatedItems.push(bagItem);
      }
    });

    const temp = {
      item: item.item,
      quantity: item.quantity + 1,
    };

    setBagItems([...updatedItems, temp]);
    saveStoragedItems(updatedItems, temp);
    updateTotalPrice(item.item.price);
  };

  return (
    <BagContext.Provider
      value={{
        bagItems,
        totalPrice,
        addItemToBag,
        readStoragedItems,
        lowerBagItemQuantity,
        increaseBagItemQuantity,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export const useBag = (): BagContextData => {
  const context = useContext(BagContext);
  return context;
};

export default BagProvider;
