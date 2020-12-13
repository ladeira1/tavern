import React from 'react';
import ItemInterface from '../../models/ItemInterface';
import Item from '../Item';

const Items: React.FC<{ items: ItemInterface[]; title: string }> = ({
  items,
  title,
}) => {
  console.log('aa');

  return (
    <div>
      <h1>{title}</h1>
      {items.length && items.map(item => <Item item={item} />)}
    </div>
  );
};

export default Items;
