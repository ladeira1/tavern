import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
  background: ${colors.bag};
  max-width: 350px;
  width: 90%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border-left: 2px solid ${colors.line};
  position: fixed;

  font-size: 10px;
`;
export const Wrapper = styled.div`
  flex: 1;
  margin: 3%;
  display: flex;
  flex-direction: column;
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
  max-height: 500px;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.line};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.scrollHover};
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
export const CheckoutTitle = styled.h2`
  color: ${colors.black};
  font-family: 'Oswald', sans-serif;
  font-size: 2em;
  font-weight: 400;
`;
