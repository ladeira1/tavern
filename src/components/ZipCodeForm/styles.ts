/* eslint-disable prettier/prettier */
import styled from 'styled-components';
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
export const Button = styled.button<{ disabled: boolean }>`
  margin-left: 3%;
  margin-bottom: 15px;
  height: 60px;
  width: 50%;
  border: 1px solid ${colors.white};
  border-radius: 5px;
  background-color: transparent;

  color: ${colors.text};
  font-family: 'Oswald', sans-serif;
  font-size: 2em;

  :hover {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    background-color: ${props => (props.disabled ? 'transparent' : 'rgba(255, 255, 255, 0.2)')};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'hover')};
  }
`;

export const InputWrapper = styled.div<{ width: string }>`
  width: ${props => props.width};
`;
export const Text = styled.h3`
  font-size: 1.6em;
  font-family: 'Oswald', sans-serif;
  color: ${colors.checkoutComment};
`;
