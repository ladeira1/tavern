import styled from 'styled-components';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import colors from '../../assets/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const Content = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  max-width: 1200px;

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

  @media screen and (min-width: 620px) {
    width: 90%;
    max-width: 600px;
  }
`;
// export const InputWrapper = styled.div<{ selected: boolean }>`
//   display: flex;
//   align-items: center;
//   background: ${colors.textInput};
//   margin-bottom: 15px;
//   border-radius: 5px;
//   height: 60px;
//   width: 100%;
//   border-width: ${props => (props.selected ? '3px' : 0)};
//   border-color: ${props => (props.selected ? colors.white : 'transparent')};
//   border-style: solid;

//   -webkit-touch-callout: none; /* iOS Safari */
//   -webkit-user-select: none; /* Safari */
//   -khtml-user-select: none; /* Konqueror HTML */
//   -moz-user-select: none; /* Old versions of Firefox */
//   -ms-user-select: none; /* Internet Explorer/Edge */
//   user-select: none; /* Non-prefixed version, currently
//     supported by Chrome, Edge, Opera and Firefox */
// `;
// export const Input = styled.input<{ selected: boolean }>`
//   flex: 1;
//   height: 60px;
//   padding: 1%;
//   width: 100%;

//   font-size: 18px;
//   font-family: 'Ubuntu', sans-serif;
//   color: ${props => (props.selected ? colors.white : colors.formSecondary)};

//   ::-webkit-input-placeholder {
//     color: ${props => (props.selected ? colors.white : colors.formSecondary)};
//     font-size: 18px;
//     font-family: 'Ubuntu', sans-serif;
//   }

//   ::-moz-placeholder {
//     color: ${props => (props.selected ? colors.white : colors.formSecondary)};
//     font-size: 18px;
//     font-family: 'Ubuntu', sans-serif;
//   }
//   :-ms-input-placeholder {
//     color: ${props => (props.selected ? colors.white : colors.formSecondary)};
//     font-size: 18px;
//     font-family: 'Ubuntu', sans-serif;
//   }
//   :-moz-placeholder {
//     color: ${props => (props.selected ? colors.white : colors.formSecondary)};
//     font-size: 18px;
//     font-family: 'Ubuntu', sans-serif;
//   }

//   :focus {
//     outline-width: 0;
//   }
// `;
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
export const SubmitButton = styled.button`
  background: ${colors.white};
  height: 60px;
  margin-top: 50px;
  border-radius: 5px;
  transition: all ease 0.2s;

  .buttonText {
    font-size: 22px;
    font-family: 'Oswald', sans-serif;
    color: ${colors.black};
  }

  :hover {
    transform: scale(1.05);
  }
`;
export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 34px;
  text-align: center;
  margin-bottom: 20px;
  max-height: 10%;

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
