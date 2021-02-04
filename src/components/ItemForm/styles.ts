/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import colors from '../../assets/colors';

export const Content = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  overflow-y: auto;
  height: 98%;
  margin-bottom: 10px;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  @media screen and (min-width: 1080px) {
    flex-direction: row;
  }
`;
export const Input = styled.input`
  display: none;
`;
export const ImageLabel = styled.label<{ hasImage: boolean }>`
  height: 60px;
  width: 100%;
  background: ${colors.textInput};
  margin-bottom: ${props => (props.hasImage ? 0 : '15px')};
  display: flex;
  align-items: center;
  border-radius: 5px 5px ${props => (props.hasImage ? 0 : '5px')} ${props => (props.hasImage ? 0 : '5px')};

  span {
    color: ${colors.formSecondary};
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    margin-left: 10px;
  }

  :hover {
    cursor: pointer;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 400px;
  background: ${colors.textInput};
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0 5% 5% 5%;
  position: relative;
`;
export const ImageItem = styled.img`
  width: 100%;
`;
export const XIcon = styled(FiX).attrs({
  size: 36,
})`
  color: ${colors.red};
  opacity: 0.8;
  z-index: 2;
  position: absolute;
  top: 5%;
  right: 10%;

  :hover {
    cursor: pointer;
  }
`;
export const DetailsInput = styled.textarea<{selected: boolean}>`
  width: 100%;
  min-height: 60px;
  padding: 2.5% 2%;
  color: ${props => (props.selected ? colors.white : colors.formSecondary)};
  font-size: 18px;
  font-family: 'Ubuntu', sans-serif;

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

  ::-webkit-scrollbar {
    display: none;
  }

  :focus {
    outline-width: 0;
  }
`;
export const DeleteButton = styled.button`
  background: ${colors.red};
  min-height: 60px;
  margin-top: 10px;
  border-radius: 5px;
  transition: all ease 0.2s;

  font-size: 22px;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  color: ${colors.black};

  :hover {
    transform: scale(1.05);
    cursor: 'pointer';
  }
`;
