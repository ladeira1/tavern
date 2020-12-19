import React, { createContext, useContext, useState } from 'react';
import ItemInterface from '../models/ItemInterface';

interface BagContextData {
  bagItems: ItemInterface[];
  addItemToBag: (item: ItemInterface) => void;
  readStoragedItems: () => void;
}

const BagContext = createContext<BagContextData>({} as BagContextData);

const BagProvider: React.FC = ({ children }) => {
  const [bagItems, setBagItems] = useState<ItemInterface[]>(
    [] as ItemInterface[],
  );

  const saveStoragedItems = (item: ItemInterface) => {
    const newStoragedItems = bagItems.concat(item);
    localStorage.setItem('@item:bagItem', JSON.stringify(newStoragedItems));
  };

  const addItemToBag = (item: ItemInterface) => {
    setBagItems([...bagItems, item]);
    saveStoragedItems(item);
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
