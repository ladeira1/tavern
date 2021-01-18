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
export const Button = styled.button`
  margin-left: 3%;
  margin-bottom: 15px;
  height: 60px;
  width: 40%;
  border: 1px solid ${colors.white};
  border-radius: 5px;
  background-color: transparent;
  float: right;

  color: ${colors.text};
  font-family: 'Oswald', sans-serif;
  font-size: 2em;

  :hover {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const InputWrapper = styled.div<{ width: string }>`
  width: ${props => props.width};
`;
