/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import {
  Container,
  Content,
  Form,
  MailIcon,
  LockIcon,
  SubmitButton,
  Title,
  LinkElement,
} from '../../shared/styles/formStyles';
import FormTextInput from '../../components/FormTextInput';

import { useAuth } from '../../contexts/auth';

const Login: React.FC = () => {
  const { isLogged, login } = useAuth();

  if (isLogged) {
    return <Redirect to="/" />;
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await login(email, password);
    // eslint-disable-next-line no-console
    console.log(response);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Form onSubmit={handleLogin}>
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
            <SubmitButton type="submit">
              <h2 className="buttonText">Login</h2>
            </SubmitButton>
            <LinkElement to="/register">
              Don't have an account? Create one!
            </LinkElement>
          </Form>
          <Title>Log in to your account</Title>
        </Content>
      </Container>
    </>
  );
};

export default Login;
