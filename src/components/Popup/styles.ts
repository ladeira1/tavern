import styled from 'styled-components';
import colors from '../../assets/colors';

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
`;
export const Container = styled.div`
  height: 40%;
  width: 90%;
  background-color: ${colors.background};
  border-radius: 5px;
  padding: 1% 2%;
  font-size: 9px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 650px) {
    width: 80%;
  }

  @media screen and (min-width: 750px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1000px) {
    width: 70%;
  }

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;
export const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 3.3em;
  color: ${colors.text};
  margin-bottom: 0.5em;

  @media screen and (max-width: 410px) {
    font-size: 2.5em;
  }
`;
export const Text = styled.h3`
  font-family: 'Roboto Slab', sans-serif;
  font-size: 2em;
  color: ${colors.checkoutComment};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
`;
export const Button = styled.button`
  margin-left: 3%;
  margin-bottom: 15px;
  height: 60px;
  width: 50%;
  border: 1px solid ${colors.white};
  border-radius: 5px;
  background-color: transparent;

  color: ${colors.text};
  font-family: 'Oswald', sans-serif;
  font-size: 2em;

  :hover {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
