/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Empty, Title, Buttons } from './styles';
import { useAuth } from '../../contexts/Auth';

const Header: React.FC = () => {
  const { isLogged, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Container>
      <Wrapper>
        <Empty />
        <Title>TAVERN</Title>
        <Buttons logged={isLogged}>
          <Link to="/user">Profile</Link>
          <Link to="/item">Create Item</Link>
          {isLogged ? (
            <div className="auth" onClick={handleLogout}>
              Logout
            </div>
          ) : (
            <Link to="/login" className="auth">
              login
            </Link>
          )}
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Header;
