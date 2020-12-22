import styled from 'styled-components';

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
`;

export const LeftColumn = styled.article`
  flex: 7;
  max-width: 70%;
`;

export const RightColumn = styled.article`
  flex: 2;
`;
