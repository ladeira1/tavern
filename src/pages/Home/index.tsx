import React, { useState } from 'react';
import { Container, Wrapper, LeftColumn, Bag } from './styles';

import Header from '../../components/Header';
import PopularItems from '../../components/PopularItems';

interface Item {
  id: number;
  name: string;
  price: number;
  details: string;
  imageUrl: string;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>({} as Item[]);
  const [popularItems, setPopularItems] = useState<Item[]>({} as Item[]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <LeftColumn>
          <PopularItems />
        </LeftColumn>

        <Bag />
      </Wrapper>
    </Container>
  );
};

export default Home;
