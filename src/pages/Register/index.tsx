import React, { useState } from 'react';
import Header from '../../components/Header';
import {
  Container,
  Content,
  Form,
  UserIcon,
  MailIcon,
  LockIcon,
  SubmitButton,
  Title,
} from '../../shared/styles/formStyles';
import FormTextInput from '../../components/FormTextInput';

const Register: React.FC = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleCreateAccount = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Form onSubmit={handleCreateAccount}>
            <FormTextInput
              Icon={UserIcon}
              text={user}
              setText={setUser}
              placeholder="Name"
              type="text"
            />
            <FormTextInput
              Icon={MailIcon}
              text={email}
              setText={setEmail}
              placeholder="E-mail"
              type="email"
            />
            <FormTextInput
              Icon={LockIcon}
              text={password}
              setText={setPassword}
              placeholder="Password"
              type="password"
            />
            <FormTextInput
              Icon={LockIcon}
              text={passwordConfirmation}
              setText={setPasswordConfirmation}
              placeholder="Confirm your password"
              type="password"
            />
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
