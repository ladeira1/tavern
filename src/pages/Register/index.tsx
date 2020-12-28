import React, { useState } from 'react';
import Header from '../../components/Header';
import {
  Container,
  Content,
  Form,
  InputWrapper,
  Input,
  UserIcon,
  MailIcon,
  LockIcon,
  SubmitButton,
  Title,
} from '../../shared/Form/styles';

const Register: React.FC = () => {
  const [userSelected, setUserSelected] = useState(false);
  const [emailSelected, setEmailSelected] = useState(false);
  const [passwordSelected, setPasswordSelected] = useState(false);
  const [
    passwordConfirmationSelected,
    setPasswordConfirmationSelected,
  ] = useState(false);

  const handleInputClick = (
    setState: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setState(true);
  };

  const handleInputBlur = (
    setState: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setState(false);
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Form>
            <InputWrapper
              onClick={() => handleInputClick(setUserSelected)}
              onBlur={() => handleInputBlur(setUserSelected)}
              selected={userSelected}
            >
              <UserIcon selected={userSelected} />
              <Input type="text" placeholder="Name" selected={userSelected} />
            </InputWrapper>

            <InputWrapper
              onClick={() => handleInputClick(setEmailSelected)}
              onBlur={() => handleInputBlur(setEmailSelected)}
              selected={emailSelected}
            >
              <MailIcon selected={emailSelected} />
              <Input
                type="email"
                placeholder="E-Mail"
                selected={emailSelected}
              />
            </InputWrapper>

            <InputWrapper
              onClick={() => handleInputClick(setPasswordSelected)}
              onBlur={() => handleInputBlur(setPasswordSelected)}
              selected={passwordSelected}
            >
              <LockIcon selected={passwordSelected} />
              <Input
                type="password"
                placeholder="Password"
                selected={passwordSelected}
              />
            </InputWrapper>

            <InputWrapper
              onClick={() => handleInputClick(setPasswordConfirmationSelected)}
              onBlur={() => handleInputBlur(setPasswordConfirmationSelected)}
              selected={passwordConfirmationSelected}
            >
              <LockIcon selected={passwordConfirmationSelected} />
              <Input
                type="password"
                placeholder="Confirm your password"
                selected={passwordConfirmationSelected}
              />
            </InputWrapper>

            <SubmitButton type="submit">
              <h2 className="buttonText">Create Account</h2>
            </SubmitButton>
          </Form>
          <Title>Create your account</Title>
        </Content>
      </Container>
    </>
  );
};

export default Register;
