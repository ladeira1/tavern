import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
  height: 100%;
  min-height: 92vh;
  max-height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  font-size: 10px;

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
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 4em;
  color: ${colors.white};
`;
export const FilterContainer = styled.div`
  display: flex;
  width: 60%;
  min-width: 850px;
  margin-top: 2%;
  justify-content: space-between;
  align-items: center;

  .first {
    width: 90%;
    max-width: 600px;
  }

  .second {
    width: 90%;
    max-width: 200px;
  }
`;
export const FilterWrapper = styled.section`
  font-family: 'Oswald', sans-serif;
  font-size: 2em;
  color: ${colors.formSecondary};
  line-height: 2em;
`;
