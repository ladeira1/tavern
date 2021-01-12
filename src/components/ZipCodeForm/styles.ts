import styled from 'styled-components';
import { FiMapPin } from 'react-icons/fi';
import colors from '../../assets/colors';

export const Container = styled.div`
  font-size: 10px;

  @media screen and (max-width: 550px) {
    font-size: 9px;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  margin-left: 3%;
  height: 60px;
  width: 30%;
  border: 1px solid ${colors.white};
  border-radius: 5px;
  background-color: transparent;

  color: ${colors.text};
  font-family: 'Oswald', sans-serif;
  font-size: 2em;

  :hover {
    color: ${colors.text};
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
  }
`;
export const MapPinIcon = styled(FiMapPin).attrs({
  size: 30,
})<{ selected: boolean }>`
  margin: 2%;
  color: ${props => (props.selected ? colors.white : colors.formSecondary)};
`;
export const InputWrapper = styled.div<{ width: string }>`
  width: ${props => props.width};
`;
export const Text = styled.h3`
  font-size: 1.5em;
  font-family: 'Oswald', sans-serif;
  color: ${colors.checkoutComment};
`;
