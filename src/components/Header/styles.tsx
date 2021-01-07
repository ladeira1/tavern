import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.main<{ logged: boolean }>`
  width: 100vw;
  height: 8vh;
  min-height: 70px;
  background-color: ${colors.primary};
  overflow: hidden;
  position: static;
  z-index: 10;

  .auth {
    color: ${props => (props.logged ? colors.red : colors.green)};
    font-family: 'Ubuntu';
    font-size: 1.6em;

    :hover {
      cursor: pointer;
    }
  }
`;

export const Wrapper = styled.article`
  width: 98%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 7px;

  @media screen and (min-width: 810px) {
    font-size: 10px;
  }

  @media screen and (min-width: 540px) {
    width: 95%;
  }

  @media screen and (min-width: 380px) {
    font-size: 8px;
  }
`;

export const Empty = styled.div`
  flex: 1;

  @media screen and (min-width: 810px) {
    display: none;
    background: red;
  }
`;

export const Title = styled.h1`
  flex: 1;
  font-size: 6em;
  font-weight: normal;
  font-family: 'Fredericka the Great', cursive;
  color: ${colors.text};
`;

export const Buttons = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    color: ${colors.text};
    font-family: 'Ubuntu';
    font-size: 1.6em;
    margin-left: 3em;
    display: none;

    :hover {
      cursor: pointer;
    }

    @media screen and (min-width: 810px) {
      display: block;
    }
  }

  .auth {
    display: none;

    @media screen and (min-width: 810px) {
      display: block;
      font-size: 1.6em;
      margin-left: 3em;
    }
  }
`;

export const Menu = styled.nav<{ isClicked: boolean }>`
  z-index: 99;
  width: 25px;
  max-width: 25px;

  margin-right: 10px;

  cursor: pointer;

  div {
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    background: ${colors.text};
    height: 2px;
    width: 100%;
    margin: 6px auto;
  }

  div:first-child {
    transform: ${props => (props.isClicked ? 'rotate(45deg)' : 'rotate(0)')};
  }

  div:nth-child(2) {
    opacity: ${props => (props.isClicked ? '0' : '1')};
    transform: translateX(${props => (props.isClicked ? '20px' : '0')});
  }

  div:nth-child(3) {
    transform: ${props => (props.isClicked ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  @media screen and (min-width: 810px) {
    display: none;
  }
`;
export const Settings = styled.div<{ isClicked: boolean }>`
  transform: translate(${props => (props.isClicked ? '0' : '100%')});

  position: ${props => (props.isClicked ? 'absolute' : 'relative')};
  top: 0;
  right: 0;
  height: 100%;
  width: 80%;
  max-width: 300px;

  background: ${colors.background};
  opacity: 0.7;
  transition: all linear 0.2s;

  z-index: 90;
`;
export const ButtonArea = styled.div<{ isLogged: boolean }>`
  margin-right: 10px;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  font-size: 1.2em;
  font-family: 'Oswald', sans-serif;
  color: ${colors.text};
  padding-left: 10px;

  padding-right: 10px;

  a {
    background-color: ${colors.primary};
    color: ${colors.text};
    margin-top: 4%;
    text-decoration: none;
    font-size: 2em;
  }

  .auth {
    background-color: ${colors.primary};
    margin-top: 4%;
    text-decoration: none;
    font-size: 2em;
  }

  span {
    font-size: 1rem;
    margin-top: 10px;
    color: ${colors.white};
  }
`;
