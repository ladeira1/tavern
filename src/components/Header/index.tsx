import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Empty, Title, Buttons } from './styles';
import { useAuth } from '../../contexts/auth';

const Header: React.FC = () => {
  const { isLogged } = useAuth();

  // const handleLogout = () => {
  // };

  return (
    <Container>
      <Wrapper>
        <Empty />
        <Title>TAVERN</Title>
        <Buttons logged={isLogged}>
          <Link to="/user">Profile</Link>
          <Link to="/item">Create Item</Link>
          <Link to="/login" className="auth">
            {isLogged ? 'Logout' : 'Login'}
          </Link>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Header;
