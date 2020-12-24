import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import colors from '../../assets/colors';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  font-size: 10px;

  @media screen and (max-width: 650px) {
    font-size: 9px;
  }
`;
export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 2.7em;
  color: ${colors.text};
  margin-bottom: 3.5%;
`;
export const FixedItemsWrapper = styled.section<{ isExpanded: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 17px;
  grid-row-gap: 30px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: ${props => (props.isExpanded ? '30px' : '0')};
`;
export const ItemsWrapper = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 17px;
  grid-row-gap: 30px;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 360px) {
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  }
`;
export const Footer = styled.footer`
  width: 100%;
  height: 2px;
  background: ${colors.line};
  margin-top: 2.5%;
`;
export const ButtonDown = styled(FiChevronDown).attrs({
  size: 30,
  color: colors.text,
})<{ length: number }>`
  opacity: 1;
  transform: scale(0.9);
  transition: all ease 0.2s;
  margin: -2% auto 0 auto;
  background: ${colors.background};
  border-radius: 50%;
  display: ${props => (props.length > 4 ? 'block' : 'none')};

  :hover {
    transform: scale(1);
  }
`;
export const ButtonUp = styled(FiChevronUp).attrs({
  size: 30,
  color: colors.text,
})`
  opacity: 1;
  transform: scale(0.9);
  transition: all ease 0.2s;
  margin: -2% auto 0 auto;
  background: ${colors.background};
  border-radius: 50%;
  :hover {
    transform: scale(1);
  }
`;
export const Empty = styled.div`
  min-width: calc(50% + 10px);
`;
