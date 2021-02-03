import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../../assets/colors';

export const Background = styled.div`
  height: 100%;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
`;
export const Container = styled(motion.div)`
  height: 30%;
  min-height: 350px;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 1% 2%;
  font-size: 9px;
  display: flex;
  flex-direction: column;

  backdrop-filter: blur(5px);

  @media screen and (min-width: 650px) {
    width: 80%;
  }

  @media screen and (min-width: 750px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1000px) {
    width: 70%;
  }

  @media screen and (min-width: 1450px) {
    width: 50%;
  }
`;
export const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 2.5em;
  color: ${colors.white};
  text-align: center;
  margin-bottom: 1em;

  @media screen and (min-width: 410px) {
    font-size: 3.6em;
  }
`;
export const Text = styled.h3`
  font-family: 'Ubuntu', sans-serif;
  font-size: 2em;
  color: ${colors.text};
  opacity: 0.9;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;

  @media screen and (min-width: 650px) {
    justify-content: flex-end;
  }
`;
export const Button = styled.button`
  margin-bottom: 15px;
  height: 60px;
  flex: 1;
  border: 1px solid ${colors.white};
  border-radius: 5px;
  background-color: ${colors.white};

  color: ${colors.black};
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  font-size: 2.2em;
  transition: all ease 0.2s;

  :hover {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.8);

    @media screen and (min-width: 650px) {
      transform: scale(1.05);
    }

    @media screen and (min-width: 800px) {
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 650px) {
    width: 40%;
  }
`;
