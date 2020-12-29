import React, { useState } from 'react';
import Header from '../../components/Header';
import {
  Container,
  Content,
  Form,
  // InputWrapper,
  // Input,
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
            <FormTextInput Icon={UserIcon} text={user} setText={setUser} />
            <FormTextInput Icon={MailIcon} text={email} setText={setEmail} />
            <FormTextInput
              Icon={LockIcon}
              text={password}
              setText={setPassword}
            />
            <FormTextInput
              Icon={LockIcon}
              text={passwordConfirmation}
              setText={setPasswordConfirmation}
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
