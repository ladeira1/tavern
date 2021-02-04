import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import BubbleLoader from '../../components/BubbleLoader';
import { useLoading } from '../../contexts/Loading';
import {
  Container,
  Wrapper,
  LeftColumn,
  RightColumn,
  LoadingWrapper,
} from './styles';
import { useBag } from '../../contexts/Bag';
import Header from '../../components/Header';
import NewItems from '../../components/NewItems';
import Items from '../../components/Items';
import Bag from '../../components/Bag';
import MobileBag from '../../components/MobileBag';

import ItemInterface from '../../models/ItemInterface';

import { getItems } from '../../services/firebase';

const Loading: React.FC = () => (
  <LoadingWrapper>
    <BubbleLoader color="#fff" />
  </LoadingWrapper>
);

const Home: React.FC = () => {
  const { loading, setLoading } = useLoading();

  const history = useHistory();

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
    const getDatabaseItems = async () => {
      setLoading(true);
      const items = await getItems();

      if (items.length) {
        setBurgers(items.filter(item => item.type === 'burger'));
        setSideDishes(items.filter(item => item.type === 'sideDish'));
        setDrinks(items.filter(item => item.type === 'drink'));
        setNewItems(items.slice(0, 9));
      }

      setLoading(false);
    };
    getDatabaseItems();
    readStoragedItems();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        {loading ? (
          <Loading />
        ) : (
          <>
            <LeftColumn>
              <NewItems items={newItems} />
              <Items items={burgers} title="Burgers" />
              <Items items={sideDishes} title="Sides" />
              <Items items={drinks} title="Drinks" />
              <div className="empty" />
            </LeftColumn>

            <RightColumn>
              <Bag action={() => history.push('/checkout')} isEnabled />
            </RightColumn>
          </>
        )}
      </Wrapper>
      <MobileBag action={() => history.push('/checkout')} isEnabled />
    </Container>
  );
};

export default Home;
