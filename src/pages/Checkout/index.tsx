import React, { useEffect } from 'react';
import { Container, Wrapper } from '../../shared/styles/formStyles';
import { Content, LeftColumn, RightColumn } from './styles';
import { useBag } from '../../contexts/Bag';

import Header from '../../components/Header';
import Bag from '../../components/Bag';

const Checkout: React.FC = () => {
  const { readStoragedItems } = useBag();

  useEffect(() => {
    readStoragedItems();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          <LeftColumn>To do</LeftColumn>
          <RightColumn>
            <Bag />
          </RightColumn>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Checkout;
