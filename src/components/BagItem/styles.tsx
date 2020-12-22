import styled from 'styled-components';
import { FiMessageSquare, FiMinus, FiPlus } from 'react-icons/fi';
import colors from '../../assets/colors';

export const ItemContainer = styled.div`
  background: ${colors.primary};
  margin-bottom: 4%;
  padding: 2% 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  height: 130px;
  position: relative;
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
export const CommentTextArea = styled.textarea`
  position: absolute;
  background: ${colors.white};
  right: 10%;
  top: 25%;
  border-radius: 5px 0 5px 5px;
  min-height: 100px;
  min-width: 200px;
  z-index: 3;
  padding: 8px;
  font-family: 'Roboto Slab', sans-serif;
`;
