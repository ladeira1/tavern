import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';
import colors from '../../assets/colors';

export const Container = styled(motion.div)`
  background: ${colors.primary};
  width: 390px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  font-size: 10px;
  transform-origin: top center;
  z-index: 2;
`;
export const ContentWrapper = styled.div`
  padding: 2.5%;
  display: flex;
`;
export const ImageWrapper = styled.section`
  border-radius: 10px;
  flex: 1;
  display: flex;
  max-width: 40%;
  max-height: 100%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
export const RightSide = styled.section`
  width: 60%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-family: 'Ubuntu';
  font-size: 1.8em;
  margin-bottom: 10px;
  flex: 1;
`;
export const Details = styled.p`
  font-family: 'Ubuntu';
  font-size: 1.2em;
  opacity: 0.6;
  flex: 4;
  overflow: hidden;
`;
export const Footer = styled.footer`
  flex: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Price = styled.h1`
  margin-bottom: 0;
  font-family: 'Roboto Slab', serif;
  font-size: 1.6em;
  color: ${colors.price};
  display: flex;
  align-items: flex-end;
`;
export const AddButton = styled(FiPlus).attrs({
  size: 18,
  color: colors.background,
})`
  background-color: ${colors.text};
  opacity: 0.9;
  border-radius: 50%;
`;
