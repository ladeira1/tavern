import React, { useState, useEffect } from 'react';
import { Container, Wrapper, LeftColumn, Bag } from './styles';

import Header from '../../components/Header';
import NewItems from '../../components/NewItems';
import Items from '../../components/Items';

import ItemInterface from '../../models/ItemInterface';

import api from '../../services/api';

const Home: React.FC = () => {
  const [items, setItems] = useState<ItemInterface[]>({} as ItemInterface[]);
  const [newItems, setNewItems] = useState<ItemInterface[]>(
    {} as ItemInterface[],
  );

  useEffect(() => {
    async function getItems() {
      const result = await api.getItems();
      if (result) {
        setItems(result);
        setNewItems(result.slice(0, 8));
      }
    }

    getItems();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <LeftColumn>
          <NewItems items={newItems} />
          <Items items={items} title="Burgers" />
        </LeftColumn>

        <Bag />
      </Wrapper>
    </Container>
  );
};

export default Home;
