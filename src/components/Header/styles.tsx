import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.main`
  width: 100vw;
  height: 10vh;
  background-color: ${colors.primary};
  overflow: hidden;
`;

export const Wrapper = styled.article`
  width: 80%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 10px;

  @media screen and (max-width: 810px) {
    width: 95%;
  }

  @media screen and (max-width: 540px) {
    font-size: 8px;
  }

  @media screen and (max-width: 380px) {
    font-size: 7px;
  }
`;

export const Empty = styled.div`
  flex: 1;

  @media screen and (max-width: 810px) {
    display: none;
  }
`;

export const Title = styled.h1`
  flex: 1;
  font-size: 6em;
  font-weight: normal;
  font-family: 'Fredericka the Great', cursive;
  color: ${colors.text};
`;

export const Buttons = styled.section<{ logged: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    color: ${colors.text};
    font-family: 'Ubuntu';
    font-size: 1.6em;
    margin-right: 3em;

    :hover {
      cursor: pointer;
    }

    @media screen and (max-width: 400px) {
      margin-right: 2em;
    }
  }

  button {
    color: ${props => (props.logged ? colors.red : colors.green)};
    font-family: 'Ubuntu';
    font-size: 1.6em;

    :hover {
      cursor: pointer;
    }
  }
`;
