import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 98%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  font-size: 7px;

  @media screen and (min-width: 480px) {
    font-size: 8px;
  }

  @media screen and (min-width: 600px) {
    font-size: 9px;
  }

  @media screen and (min-width: 800px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1144px) {
    min-height: 100vh;
  }
`;
export const Wrapper = styled.main`
  max-width: 1200px;
  width: 95%;
  min-height: 90%;
  margin: 0 auto;
  border-radius: 10px;
  overflow-x: hidden;
  margin-top: calc(8vh + 2%);

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  @media screen and (max-width: 1144px) {
    width: 98%;
  }
`;
export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 4em;
  color: ${colors.white};
`;
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 100%;
  max-width: 850px;
  margin-top: 2%;
  justify-content: space-between;
  align-items: flex-start;

  .first {
    width: 90%;
  }

  .second {
    width: 90%;
    max-width: 200px;
  }

  @media screen and (min-width: 628px) {
    flex-direction: row;
    justify-content: space-between;

    .first {
      width: 70%;
    }

    .second {
      width: 28%;
    }
  }

  @media screen and (min-width: 780px) {
    .second {
      max-width: 300px;
    }
  }
`;
export const FilterWrapper = styled.section`
  font-family: 'Oswald', sans-serif;
  font-size: 2em;
  color: ${colors.formSecondary};
  line-height: 2em;
`;
export const ItemsWrapper = styled.section`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media screen and (min-width: 610px) {
    max-width: 100%;
  }
`;
