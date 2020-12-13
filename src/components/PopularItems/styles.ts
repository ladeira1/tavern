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
  margin-bottom: 30px;
`;
export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
export const ItemsContainer = styled.div`
  overflow-x: hidden;
  width: 100%;
`;
export const ItemsWrapper = styled.div<{ marginLeft: number; width: number }>`
  margin-left: ${props => props.marginLeft}px;
  width: ${props => props.width};
  display: flex;
  flex-direction: row;
  transition: all ease 0.5s;
`;

export const LeftButton = styled(FiChevronLeft).attrs({
  size: 30,
  color: colors.white,
})`
  z-index: 2;
  transform: scale(0.9);
  background: ${colors.primary};
  opacity: 0.5;
  min-height: 350px;
  margin-right: -27px;

  :hover {
    opacity: 0.7;
  }
`;
export const RightButton = styled(FiChevronRight).attrs({
  size: 30,
  color: colors.white,
})`
  z-index: 2;
  margin-left: -27px;
  transform: scale(0.9);
  background: ${colors.primary};
  opacity: 0.5;
  min-height: 350px;

  :hover {
    opacity: 0.7;
  }
`;
