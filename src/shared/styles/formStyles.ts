import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FiUser,
  FiMail,
  FiLock,
  FiDollarSign,
  FiImage,
  FiEdit,
  FiList,
} from 'react-icons/fi';
import { IoFastFoodOutline } from 'react-icons/io5';

import colors from '../../assets/colors';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  width: 100vw;
  height: 90%;
  min-height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8vh auto 0 auto;

  @media screen and (min-height: 800px) {
    padding-top: 5vh;
  }
`;
export const Content = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  max-width: 1200px;

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  @media screen and (min-width: 1080px) {
    flex-direction: row;
  }
`;

export const Form = styled.form`
  background: ${colors.primary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 4%;
  width: 100%;
  margin-top: 5%;

  @media screen and (min-width: 620px) {
    width: 90%;
    max-width: 600px;
  }
`;

export const UserIcon = styled(FiUser).attrs({
  size: 30,
})<{ selected: boolean }>`
  margin: 2%;
  color: ${props => (props.selected ? colors.white : colors.formSecondary)};
`;
export const MailIcon = styled(FiMail).attrs({
  size: 28,
})<{ selected: boolean }>`
  margin: 2%;
  color: ${props => (props.selected ? colors.white : colors.formSecondary)};
`;
export const LockIcon = styled(FiLock).attrs({
  size: 28,
})<{ selected: boolean }>`
  margin: 2%;
  color: ${props => (props.selected ? colors.white : colors.formSecondary)};
`;
export const DollarIcon = styled(FiDollarSign).attrs({
  size: 28,
})<{ selected: boolean }>`
  margin: 2%;
  color: ${props => (props.selected ? colors.white : colors.formSecondary)};
`;
export const ImageIcon = styled(FiImage).attrs({
  size: 28,
})`
  margin: 2%;
  color: ${colors.formSecondary};
`;
export const FoodIcon = styled(IoFastFoodOutline).attrs({
  size: 28,
})<{ selected: boolean }>`
  margin: 2%;
  color: ${props => (props.selected ? colors.white : colors.formSecondary)};
`;
export const EditIcon = styled(FiEdit).attrs({
  size: 28,
})<{ selected: boolean }>`
  margin: 2%;
  color: ${props => (props.selected ? colors.white : colors.formSecondary)};
`;
export const ListIcon = styled(FiList).attrs({
  size: 34,
})<{ selected: boolean }>`
  margin: auto 2%;
  color: ${props => (props.selected ? colors.white : colors.formSecondary)};
`;
export const SubmitButton = styled.button<{ disabled: boolean }>`
  background: ${props => (props.disabled ? colors.text : colors.white)};
  min-height: 60px;
  margin-top: 10px;
  border-radius: 5px;
  transition: all ease 0.2s;

  .buttonText {
    font-size: 22px;
    font-family: 'Oswald', sans-serif;
    color: ${colors.black};
  }

  :hover {
    transform: ${props => (props.disabled ? 'scale(1)' : 'scale(1.05)')};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;
export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 34px;
  text-align: center;
  max-height: 10%;
  min-height: 10%;
  z-index: 10;

  @media screen and (min-width: 370px) {
    font-size: 40px;
  }

  @media screen and (min-width: 650px) {
    font-size: 50px;
  }

  @media screen and (min-width: 1080px) {
    font-size: 80px;
    margin-left: 50px;
    margin-bottom: 0;
    max-height: fit-content;
  }

  @media screen and (min-width: 1180px) {
    font-size: 90px;
  }
`;
export const LinkElement = styled(Link)`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Ubunt', sans-serif;
  text-align: center;
  margin-top: 25px;
  opacity: 0.8;
  transition: all ease 0.2s;

  :hover {
    transform: scale(1.05);
    opacity: 1;
  }
`;
export const Select = styled.select<{ selected: boolean }>`
  background: ${colors.textInput};
  width: 100%;
  color: ${props => (props.selected ? colors.white : colors.formSecondary)};
  font-size: 18px;
  border-radius: 5px;
  margin-right: 10px;

  :focus {
    outline-width: 0;
  }
`;
export const Label = styled.label<{ selected: boolean; height: string }>`
  width: 100%;
  height: ${props => props.height};
  background: ${colors.textInput};
  margin-bottom: 15px;
  display: flex;
  border-radius: 5px;
  border: ${props => (props.selected ? '3px' : 0)} solid
    ${props => (props.selected ? colors.white : 'transparent')};
`;
