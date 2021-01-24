import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {
  Container,
  Wrapper,
  Content,
  Form,
  UserIcon,
  MailIcon,
  LockIcon,
  Title,
  LinkElement,
} from '../../shared/styles/formStyles';
import FormTextInput from '../../components/FormTextInput';

import { useAuth } from '../../contexts/Auth';
import { useLoading } from '../../contexts/Loading';

const Register: React.FC = () => {
  const { isLogged, register } = useAuth();
  const { setLoading } = useLoading();

  if (isLogged) {
    return <Redirect to="/" />;
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleCreateAccount = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const response = await register(
      email,
      name,
      password,
      passwordConfirmation,
    );
    // eslint-disable-next-line no-console
    console.log(response);
    setLoading(false);
    setEmail('');
    setName('');
    setPassword('');
    setPasswordConfirmation('');
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          <Form onSubmit={handleCreateAccount}>
            <FormTextInput
              Icon={UserIcon}
              text={name}
              setText={setName}
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
            <Button message="Create Account" />
            <LinkElement to="/login">
              Already have an account? Log in!
            </LinkElement>
          </Form>
          <Title>Create your account</Title>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Register;
