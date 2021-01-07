import styled from 'styled-components';
import colors from '../../assets/colors';

export const Content = styled.div`
  max-width: 1200px;
  width: 95%;
  min-height: 90%;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1144px) {
    width: 100%;
  }
`;
export const LeftColumn = styled.article`
  flex: 7;
  max-width: 70%;

  .empty {
    min-height: 80px;
  }

  @media screen and (max-width: 1144px) {
    max-width: 100%;
  }

  background: red;
`;

export const RightColumn = styled.article`
  flex: 2;

  @media screen and (max-width: 1144px) {
    display: none;
  }
`;
