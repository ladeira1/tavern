import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.main`
  max-width: 1200px;
  width: 95%;
  min-height: 90%;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin-top: 8vh;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.line};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.scrollHover};
  }

  @media screen and (max-width: 1144px) {
    width: 100%;
  }
`;

export const LeftColumn = styled.article`
  flex: 7;
  max-width: 70%;

  @media screen and (max-width: 1144px) {
    max-width: 100%;
  }
`;

export const RightColumn = styled.article`
  flex: 2;

  @media screen and (max-width: 1144px) {
    display: none;
  }
`;
