import React from 'react';
import ItemInterface from '../../models/ItemInterface';

const Item: React.FC<{ item: ItemInterface }> = ({ item }) => {
  console.log('a');

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
};

export default Item;
