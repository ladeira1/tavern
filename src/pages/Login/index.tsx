/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import {
  Container,
  Content,
  Wrapper,
  Form,
  MailIcon,
  LockIcon,
  Title,
  LinkElement,
} from '../../shared/styles/formStyles';
import FormTextInput from '../../components/FormTextInput';
import Button from '../../components/Button';

import { useAuth } from '../../contexts/Auth';
import { useLoading } from '../../contexts/Loading';

const Login: React.FC = () => {
  const { isLogged, login } = useAuth();
  const { setLoading } = useLoading();

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
    setLoading(false);
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Header />\
      <Wrapper>
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
            <Button message="Login" />
            <LinkElement to="/register">
              Don't have an account? Create one!
            </LinkElement>
          </Form>
          <Title>Log in to your account</Title>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Login;
