import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

const Login: React.FC = () => {
  const { isLogged } = useAuth();

  if (isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
