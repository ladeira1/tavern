import React, { createContext, useContext, useState } from 'react';
import ItemInterface from '../models/ItemInterface';
import BagItemInterface from '../models/BagItemInterface';

interface BagContextData {
  bagItems: BagItemInterface[];
  addItemToBag: (item: ItemInterface) => void;
  readStoragedItems: () => void;
}

const BagContext = createContext<BagContextData>({} as BagContextData);

const BagProvider: React.FC = ({ children }) => {
  const [bagItems, setBagItems] = useState<BagItemInterface[]>(
    [] as BagItemInterface[],
  );

  const saveStoragedItems = (
    sourceItems: BagItemInterface[],
    item: BagItemInterface,
  ) => {
    const newStoragedItems = sourceItems.concat(item);
    localStorage.setItem('@item:bagItem', JSON.stringify(newStoragedItems));
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
      // localStorage.setItem('@item:bagItem', JSON.stringify(bagItems));
      saveStoragedItems(updatedItems, existsInBag);
    } else {
      setBagItems([...bagItems, data]);
      saveStoragedItems(bagItems, data);
    }
  };

  const readStoragedItems = () => {
    const storagedItems = localStorage.getItem('@item:bagItem');
    if (storagedItems) {
      setBagItems(JSON.parse(storagedItems));
    }
  };

  return (
    <BagContext.Provider value={{ bagItems, addItemToBag, readStoragedItems }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBag = (): BagContextData => {
  const context = useContext(BagContext);
  return context;
};

export default BagProvider;
