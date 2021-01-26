import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import colors from '../../assets/colors';

export const Container = styled.div`
  width: 95%;
  margin: 20px auto 40px auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5%;
  border-bottom: 2px solid ${colors.line};
  font-size: 10px;

  @media screen and (max-width: 650px) {
    font-size: 9px;
  }
`;
export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 2.7em;
  color: ${colors.text};
`;

export const Wrapper = styled(ScrollContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
    supported by Chrome, Edge, Opera and Firefox */

  @media screen and (max-width: 1144px) {
    margin-left: -5%;
    margin-right: -2%;
  }

  @media screen and (max-width: 794px) {
    ::-webkit-scrollbar {
      height: 4px;
    }
  }

  @media screen and (max-width: 700px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const ItemsContainer = styled.div`
  width: 95%;
  margin: auto;
`;
export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
