/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState } from 'react';
import ItemInterface from '../../models/ItemInterface';
import BagItemInterface from '../../models/BagItemInterface';
import { BagContextData } from './interfaces';

const BagContext = createContext<BagContextData>({} as BagContextData);

const BagProvider: React.FC = ({ children }) => {
  const [bagItems, setBagItems] = useState<BagItemInterface[]>(
    [] as BagItemInterface[],
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const saveStoragedItems = (
    items: BagItemInterface[],
  ) => {
    localStorage.setItem('@bag:bagItem', JSON.stringify(items));
  };

  const updateTotalPrice = (price: number) => {
    localStorage.setItem(
      '@bag:totalPrice',
      JSON.stringify(Number(totalPrice.toFixed(2)) + Number(price)),
    );
    setTotalPrice(Number(totalPrice.toFixed(2)) + Number(price));
  };

  const addItemToBag = (item: ItemInterface) => {
    let flag = false;
    const updatedBag = bagItems.map(bagItem => {
      if (bagItem.item.id === item.id) {
        flag = true;
        return { ...bagItem, quantity: bagItem.quantity + 1 };
      }

      return bagItem;
    });

    if (!flag) {
      updatedBag.push({ item, quantity: 1, comment: '' });
    }

    setBagItems(updatedBag);
    saveStoragedItems(updatedBag);
    updateTotalPrice(item.price);
  };

  const addCommentToItem = (comment: string, item: BagItemInterface) => {
    const updatedBag = bagItems.map(bagItem => {
      if (bagItem === item) {
        return { ...bagItem, comment };
      }

      return bagItem;
    });

    setBagItems(updatedBag);
    saveStoragedItems(updatedBag);
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
    let updatedBag: BagItemInterface[] = [];

    if (item.quantity > 1) {
      updatedBag = bagItems.map(bagItem => {
        if (bagItem.item.id === item.item.id) {
          return { ...item, quantity: item.quantity - 1 };
        }

        return bagItem;
      });
    } else {
      updatedBag = bagItems.filter(bagItem => bagItem.item.id !== item.item.id);
    }

    setBagItems(updatedBag);
    saveStoragedItems(updatedBag);
    updateTotalPrice(-item.item.price);
  };

  return (
    <BagContext.Provider
      value={{
        bagItems,
        totalPrice,
        addItemToBag,
        addCommentToItem,
        readStoragedItems,
        lowerBagItemQuantity,
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
