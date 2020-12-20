import styled from 'styled-components';
import { FiMessageSquare, FiMinus, FiPlus } from 'react-icons/fi';
import colors from '../../assets/colors';

export const Container = styled.div`
  background: ${colors.bag};
  max-width: 25vw;
  min-height: 50vh;
  max-height: 50vh;
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
  justify-content: space-between;
  overflow-y: scroll;
  max-height: 50vh;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const ItemContainer = styled.div`
  background: ${colors.primary};
  margin-bottom: 4%;
  padding: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  height: 130px;
`;
export const ItemHeader = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ItemTitle = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.6em;
  font-weight: 400;
  color: ${colors.text};
`;
export const CommentIcon = styled(FiMessageSquare).attrs({
  size: 22,
  color: colors.text,
})`
  transform: scale(0.9);
  transition: scale ease 0.2s;

  :hover {
    transform: scale(1);
  }
`;
export const ItemDetails = styled.p`
  flex: 3;
  color: ${colors.text};
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.2em;
  font-weight: 400;
  opacity: 0.6;
  overflow: hidden;
  margin-top: 2.5%;
`;
export const ItemFooter = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ItemQuantity = styled.div`
  flex: 1;
  margin: auto 0;
  max-width: 25%;
  max-height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 1px;
  border: 2px solid ${colors.white};
  padding: 1.5%;
`;
export const MinusIcon = styled(FiMinus).attrs({
  size: 16,
  color: colors.black,
})`
  background: ${colors.white};
  border-radius: 50%;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`;
export const ItemCurrentQuantity = styled.p`
  color: ${colors.text};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.4em;
  font-weight: 400;
`;
export const PlusIcon = styled(FiPlus).attrs({
  size: 16,
  color: colors.black,
})`
  background: ${colors.white};
  border-radius: 50%;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`;
export const ItemPrice = styled.h2`
  color: ${colors.price};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6em;
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
