import React, { useState } from 'react';
import { Container, Bb } from './styles';

import Header from '../../components/Header';

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
      <h1>Home</h1>
    </Container>
  );
};

export default Home;
