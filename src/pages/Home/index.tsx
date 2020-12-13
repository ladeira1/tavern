import React, { useState, useEffect } from 'react';
import { Container, Wrapper, LeftColumn, Bag } from './styles';

import Header from '../../components/Header';
import PopularItems from '../../components/PopularItems';

import Item from '../../models/Item';

import api from '../../services/api';

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>({} as Item[]);
  const [popularItems, setPopularItems] = useState<Item[]>({} as Item[]);

  useEffect(() => {
    async function getItems() {
      const result = await api.getItems();
      if (result) {
        setPopularItems(result);
      }
    }

    getItems();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <LeftColumn>
          <PopularItems items={popularItems} />
        </LeftColumn>

        <Bag />
      </Wrapper>
    </Container>
  );
};

export default Home;
