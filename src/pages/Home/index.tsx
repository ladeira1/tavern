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
  const [burgers, setBurgers] = useState<ItemInterface[]>(
    {} as ItemInterface[],
  );
  const [sideDishes, setSideDishes] = useState<ItemInterface[]>(
    {} as ItemInterface[],
  );
  const [drinks, setDrinks] = useState<ItemInterface[]>({} as ItemInterface[]);
  const [newItems, setNewItems] = useState<ItemInterface[]>(
    {} as ItemInterface[],
  );

  useEffect(() => {
    async function getItems() {
      const result = await api.getItems();
      if (result) {
        setBurgers(result.filter(item => item.type === 'burger'));
        setSideDishes(result.filter(item => item.type === 'sideDish'));
        setDrinks(result.filter(item => item.type === 'drink'));
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
            <Items items={burgers} title="Burgers" />
            <Items items={sideDishes} title="Side dishes" />
            <Items items={drinks} title="Drinks" />
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
