import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
  background: ${colors.bag};
  max-width: 25vw;
  min-height: 52vh;
  max-height: 52vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border-left: 2px solid ${colors.line};
  position: fixed;
  margin-top: 2%;

  font-size: 10px;
`;
export const Wrapper = styled.div`
  flex: 1;
  margin: 3%;
`;
export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 2.4em;
  margin-bottom: 2%;
`;
export const ItemsWrapper = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
  min-height: 40vh;
  max-height: 40vh;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;
export const Price = styled.h1`
  color: ${colors.price};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.8em;
  margin-bottom: 8px;
`;
export const CheckoutButton = styled.div`
  background: ${colors.text};
  width: 100%;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CheckoutTitle = styled.h1`
  color: ${colors.black};
  font-family: 'Oswald', sans-serif;
  font-size: 2em;
  font-weight: 400;
`;
