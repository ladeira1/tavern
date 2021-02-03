import React from 'react';
import { Container, Wrapper } from './styles';

import Header from '../../components/Header';

const SelectItem: React.FC = () => {
  // eslint-disable-next-line no-console
  console.log('a');

  return (
    <Container>
      <Header />
      <Wrapper>
        <h1>oi</h1>
      </Wrapper>
    </Container>
  );
};

export default SelectItem;
