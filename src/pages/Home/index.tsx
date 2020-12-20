import React, { useState, useEffect } from 'react';
import { Container, Wrapper, LeftColumn, RightColumn } from './styles';
import { useBag } from '../../contexts/bag';

import Header from '../../components/Header';
import NewItems from '../../components/NewItems';
import Items from '../../components/Items';
import Bag from '../../components/Bag';

import ItemInterface from '../../models/ItemInterface';

import api from '../../services/api';

const Home: React.FC = () => {
  const { readStoragedItems } = useBag();
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
    readStoragedItems();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <LeftColumn>
            <NewItems items={newItems} />
            <Items items={items} title="Burgers" />
            <Items items={items} title="Side dishes" />
            <Items items={items} title="Drinks" />
          </LeftColumn>

          <RightColumn>
            <Bag />
          </RightColumn>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
