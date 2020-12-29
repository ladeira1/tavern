import styled from 'styled-components';
import colors from '../../assets/colors';

export const InputWrapper = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  background: ${colors.textInput};
  margin-bottom: 15px;
  border-radius: 5px;
  height: 60px;
  width: 100%;
  border-width: ${props => (props.selected ? '3px' : 0)};
  border-color: ${props => (props.selected ? colors.white : 'transparent')};
  border-style: solid;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
    supported by Chrome, Edge, Opera and Firefox */
`;
export const Input = styled.input<{ selected: boolean }>`
  flex: 1;
  height: 60px;
  padding: 1%;
  width: 100%;

  font-size: 18px;
  font-family: 'Ubuntu', sans-serif;
  color: ${props => (props.selected ? colors.white : colors.formSecondary)};

  ::-webkit-input-placeholder {
    color: ${props => (props.selected ? colors.white : colors.formSecondary)};
    font-size: 18px;
    font-family: 'Ubuntu', sans-serif;
  }

  ::-moz-placeholder {
    color: ${props => (props.selected ? colors.white : colors.formSecondary)};
    font-size: 18px;
    font-family: 'Ubuntu', sans-serif;
  }
  :-ms-input-placeholder {
    color: ${props => (props.selected ? colors.white : colors.formSecondary)};
    font-size: 18px;
    font-family: 'Ubuntu', sans-serif;
  }
  :-moz-placeholder {
    color: ${props => (props.selected ? colors.white : colors.formSecondary)};
    font-size: 18px;
    font-family: 'Ubuntu', sans-serif;
  }

  :focus {
    outline-width: 0;
  }
`;
