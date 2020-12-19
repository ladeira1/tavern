/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ItemInterface from '../../models/ItemInterface';

import Item from '../Item';
import { Container, Title, FixedItemsWrapper, ItemsWrapper, Footer, ButtonDown, ButtonUp } from './styles';

interface ItemsProps {
  items: ItemInterface[];
  title: string;
}

const Items: React.FC<ItemsProps> = ({
  items,
  title,
}) => {
  const [expand, setExpand] = useState(false);

  const handleExpandCollapse = () => {
    setExpand(!expand);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <FixedItemsWrapper isExpanded={expand} >
        {items.length &&
          items.slice(0, 4).map(item => <Item item={item} key={item.id} />)
        }
      </FixedItemsWrapper>
      <AnimatePresence initial={false}>
        {expand &&
          <ItemsWrapper
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            {items.length &&
              items.slice(4).map(item => <Item item={item} key={item.id} />)
            }
          </ItemsWrapper>
        }
      </AnimatePresence>

      <Footer />
      {expand ? <ButtonUp onClick={handleExpandCollapse} /> :
      <ButtonDown onClick={handleExpandCollapse}/>}
    </Container>
  );
};

export default Items;
