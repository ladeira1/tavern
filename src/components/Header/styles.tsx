import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.main<{ logged: boolean }>`
  width: 100vw;
  height: 8vh;
  max-height: 8vh;
  min-height: 70px;
  background-color: ${colors.primary};
  overflow: hidden;
  position: absolute;
  z-index: 99;
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
  justify-content: space-between;
  font-size: 7px;
  text-align: center;

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
  }
`;

export const Title = styled.h1`
  flex: 1;
  font-size: 8em;
  font-weight: normal;
  font-family: 'Fredericka the Great', cursive;
  color: ${colors.text};
  margin: 0 auto;
`;

export const Buttons = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    color: ${colors.text};
    font-family: 'Ubuntu';
    font-size: 2em;
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
    margin-left: 3em;

    @media screen and (min-width: 810px) {
      display: block;
      font-size: 2em;
      margin-right: 3em;
    }
  }
`;

export const Menu = styled.nav<{ isClicked: boolean }>`
  z-index: 98;
  width: 25px;
  max-width: 25px;

  position: absolute;
  right: 15px;

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
  position: ${props => (props.isClicked ? 'fixed' : 'relative')};
  top: 0;
  right: 0;
  height: 100%;
  max-height: 100vh;
  width: 80%;
  background: rgb(10, 9, 9, 0.7);
  transition: all ease-in-out 0.3s;

  z-index: 90;

  transform: translate(${props => (props.isClicked ? '0' : '150%')});
  margin-right: ${props => (props.isClicked ? '0' : '-100%')};
`;
export const ButtonArea = styled.div<{ isLogged: boolean }>`
  margin-right: 10px;
  margin-top: 20%;
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  font-family: 'Oswald', sans-serif;
  color: ${colors.text};
  padding-left: 10px;

  padding-right: 10px;

  a {
    background-color: transparent;
    color: ${colors.text};
    margin-top: 4%;
    text-decoration: none;
  }

  .auth {
    font-size: 1em;
    background-color: transparent;
    margin-top: 4%;
    text-decoration: none;
  }
`;
