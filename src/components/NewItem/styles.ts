import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';
import colors from '../../assets/colors';

export const Wrapper = styled.main`
  min-width: 250px;
  max-width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
  border-radius: 10px;
  margin: 15px auto;
  padding: 8px;
  font-size: 10px;
  color: ${colors.text};
  transform: scale(0.9);
  transition: all ease 0.2s;

  :hover {
    transform: scale(1.1);
    z-index: 10;
    opacity: 0.8;
  }
`;
export const Image = styled.div<{ imageUrl: string }>`
  width: 100%;
  max-height: 50%;
  flex: 3;
  display: flex;
  border-radius: 10px;
  background: url(${props => props.imageUrl}) no-repeat;
  background-size: 100% 100%;
  background-color: ${colors.primary};
`;
export const Main = styled.main`
  margin-top: 10px;
  margin-left: 2%;
  margin-right: 2%;
  overflow: hidden;
  flex: 2;
`;
export const Name = styled.h1`
  flex: 1;
  font-family: 'Ubuntu', sans-serif;
  font-size: 2em;
  margin-bottom: 3%;
`;
export const Details = styled.p`
  font-family: 'Ubuntu';
  font-size: 1.4em;
  opacity: 0.6;
`;
export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  flex: 1;
`;
export const AddButton = styled(FiPlus).attrs({
  size: 20,
  color: colors.background,
})`
  background-color: ${colors.text};
  opacity: 0.9;
  border-radius: 50%;
`;
export const Price = styled.h1`
  margin-bottom: 0;
  font-family: 'Roboto Slab', serif;
  font-size: 1.8em;
  color: ${colors.price};
  display: flex;
  align-items: flex-end;
`;
