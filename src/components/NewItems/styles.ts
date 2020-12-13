import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import colors from '../../assets/colors';

export const Container = styled.div`
  width: 95%;
  margin: 20px auto 40px auto;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  color: ${colors.text};
`;
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow-x: hidden;
`;
export const ItemsContainer = styled.div`
  width: 95%;
  margin: auto;
`;
export const ItemsWrapper = styled.div<{ marginLeft: number; width: number }>`
  margin-left: ${props => props.marginLeft}px;
  width: ${props => props.width};
  display: flex;
  flex-direction: row;
  transition: all ease 0.5s;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const LeftButton = styled(FiChevronLeft).attrs({
  size: 30,
  color: colors.white,
})`
  z-index: 2;
  transform: scale(0.9);
  opacity: 0.5;
  transition: all ease 0.2s;

  :hover {
    opacity: 0.7;
    transform: scale(1);
  }
`;
export const RightButton = styled(FiChevronRight).attrs({
  size: 30,
  color: colors.white,
})`
  z-index: 2;
  transform: scale(0.9);
  opacity: 0.5;
  transition: all ease 0.2s;

  :hover {
    opacity: 0.7;
    transform: scale(1);
  }
`;
