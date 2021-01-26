import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../../assets/colors';

export const Container = styled(motion.div)`
  position: absolute;
  top: 12%;
  right: 5%;
  left: 5%;
  width: 90vw;
  height: 13%;
  min-height: 80px;
  background: ${colors.whitePopup};
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  border-radius: 10px;
  padding: 10px 2%;
  font-size: 10px;
  z-index: 99;

  @media screen and (min-width: 620px) {
    right: 10%;
    left: 10%;
    width: 80vw;
  }

  @media screen and (min-width: 820px) {
    right: 15%;
    left: 15%;
    width: 70vw;
    font-size: 11px;
  }

  @media screen and (min-width: 1080px) {
    right: 20%;
    left: 20%;
    width: 60vw;
  }

  @media screen and (min-width: 2000px) {
    right: 26%;
    left: 26%;
    width: 48vw;
  }
`;
export const Title = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  font-size: 2em;
  color: ${colors.textInput};
  margin-bottom: 2%;
`;
export const Text = styled.span`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.5em;
  color: ${colors.formSecondary};
`;
