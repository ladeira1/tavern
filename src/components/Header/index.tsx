/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Wrapper,
  Empty,
  Title,
  Buttons,
  Menu,
  Settings,
  ButtonArea,
} from './styles';
import { useAuth } from '../../contexts/Auth';

const Header: React.FC = () => {
  const { isLogged, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container logged={isLogged}>
      <Wrapper>
        <Empty />
        <Title>TAVERN</Title>
        <Buttons>
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
        <Menu onClick={toggleMenu} isClicked={isOpen}>
          <div />
          <div />
          <div />
        </Menu>

        {isOpen && (
          <Settings isClicked={isOpen}>
            <ButtonArea isLogged={isLogged}>
              <Link to="/profile">Edit Profile</Link>
              <Link to="/item">Create Item</Link>
              {isLogged ? (
                <button type="button" onClick={handleLogout} className="auth">
                  Logout
                </button>
              ) : (
                <Link to="/login" className="auth">
                  login
                </Link>
              )}
            </ButtonArea>
          </Settings>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;
