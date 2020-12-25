import React, { useState, useEffect } from 'react';
import { Container, Wrapper, LeftColumn, RightColumn } from './styles';
import { useBag } from '../../contexts/bag';

import Header from '../../components/Header';
import NewItems from '../../components/NewItems';
import Items from '../../components/Items';
import Bag from '../../components/Bag';
import MobileBag from '../../components/MobileBag';

import ItemInterface from '../../models/ItemInterface';

import firebase from '../../services/firebase';

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
      const items = await firebase.getItems();

      if (items.length) {
        setBurgers(items.filter(item => item.type === 'burger'));
        setSideDishes(items.filter(item => item.type === 'sideDish'));
        setDrinks(items.filter(item => item.type === 'drink'));
        setNewItems(items.slice(0, 8));
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
            <div className="empty" />
          </LeftColumn>

          <RightColumn>
            <Bag />
          </RightColumn>
        </Wrapper>
        <MobileBag />
      </Container>
    </>
  );
};

export default Home;
