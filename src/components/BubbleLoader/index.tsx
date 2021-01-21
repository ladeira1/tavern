import React from 'react';
import { Wrapper, Loader } from './styles';

const BubbleLoader: React.FC<{ color: string }> = ({ color }) => (
  <Wrapper>
    <Loader color={color} />
  </Wrapper>
);

export default BubbleLoader;
