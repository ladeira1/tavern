import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Title, Buttons } from './styles';

const Header: React.FC = () => {
  const handleLogout = () => {
    alert('to do');
  };

  return (
    <Container>
      <Wrapper>
        <div />
        <Title>TAVERN</Title>
        <Buttons>
          <Link to="/user">Profile</Link>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Header;
