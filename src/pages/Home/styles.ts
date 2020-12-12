import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
  background: var(--red);
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.main`
  max-width: 1200px;
  width: 95%;
  min-height: 90%;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`;

export const LeftColumn = styled.article`
  flex: 2;
`;

export const Bag = styled.aside`
  flex: 1;
`;
