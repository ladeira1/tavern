import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import colors from '../../assets/colors';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  font-size: 10px;
`;
export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 2.7em;
  color: ${colors.text};
  margin-bottom: 3.5%;
`;
export const ItemsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 17px;
  grid-row-gap: 30px;
  height: 100%;
  width: 100%;
  justify-content: space-between;
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
