import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 92vh;
  max-height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

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
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  margin-top: calc(8vh + 2%);

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
`;

export const RightColumn = styled.article`
  flex: 2;
  padding-top: 2%;
  @media screen and (max-width: 1144px) {
    display: none;
  }
`;
export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
