import React, { useState, useEffect } from 'react';
import { Container, Wrapper, LeftColumn, Bag } from './styles';

import Header from '../../components/Header';
import NewItems from '../../components/NewItems';

import Item from '../../models/Item';

import api from '../../services/api';

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>({} as Item[]);
  const [newItems, setNewItems] = useState<Item[]>({} as Item[]);

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
        </LeftColumn>

        <Bag />
      </Wrapper>
    </Container>
  );
};

export default Home;
