import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Empty, Title, Buttons } from './styles';

const Header: React.FC = () => {
  const user = false;

  const handleLogout = () => {
    alert('to do');
  };

  return (
    <Container>
      <Wrapper>
        <Empty />
        <Title>TAVERN</Title>
        <Buttons logged={user}>
          <Link to="/user">Profile</Link>
          <button type="button" onClick={handleLogout}>
            {user ? 'Logout' : 'Login'}
          </button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Header;
