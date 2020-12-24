import styled from 'styled-components';
import { FiShoppingBag } from 'react-icons/fi';
import colors from '../../assets/colors';

export const Container = styled.div`
  background: ${colors.primary};
  padding: 0 10px;
  position: fixed;
  width: 100%;
  max-height: 80%;
  left: 0;
  bottom: 0;
  z-index: 99;
  font-size: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  opacity: 1;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1144px) {
    display: none;
  }

  @media screen and (min-width: 550px) {
    width: 80%;
    left: 10%;
    right: 10%;
  }

  @media screen and (min-width: 600px) {
    width: 50%;
    left: 25%;
    right: 25%;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;

  h3 {
    color: ${colors.text};
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    font-size: 1.8em;
    flex: 1;
    text-align: center;
  }
`;
export const BagIcon = styled(FiShoppingBag).attrs({
  size: 26,
  color: colors.text,
})`
  flex: 1;
`;
export const Price = styled.h2`
  color: ${colors.price};
  font-weight: bold;
  font-family: 'Oswald', sans-serif;
  font-size: 1.8em;
  flex: 1;
  text-align: center;
`;
export const ItemsWrapper = styled.section`
  overflow-y: scroll;
`;
export const CheckoutButton = styled.div`
  background: ${colors.text};
  width: 100%;
  min-height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex: 1;
`;
export const CheckoutTitle = styled.h2`
  color: ${colors.black};
  font-family: 'Oswald', sans-serif;
  font-size: 2em;
  font-weight: 400;
`;
