import React, { useContext, useState, createContext } from 'react';
import firebase from '../../services/firebase';
import { useLoading } from '../Loading';

import {
  AuthInterface,
  UserInterface,
  AuthReturnInterface,
} from './interfaces';

const AuthContext = createContext<AuthInterface>({} as AuthInterface);

const AuthProvider: React.FC = ({ children }) => {
  const { setLoading } = useLoading();
  const [user, setUser] = useState<UserInterface | null>(null);

  const register = async (
    email: string,
    name: string,
    password: string,
    passwordConfirmation: string,
  ): Promise<AuthReturnInterface> => {
    setLoading(true);
    if (password !== passwordConfirmation) {
      setLoading(false);
      return { result: 'ERROR', message: 'Passwords must match' };
    }

    const result = await firebase.createAccount(email, name, password);
    if (!result) {
      setLoading(false);
      return { result: 'ERROR', message: 'Failed to create your account' };
    }

    setUser(result);
    setLoading(false);
    return { result: 'SUCCESS' };
  };

  const login = async (
    email: string,
    password: string,
  ): Promise<AuthReturnInterface> => {
    setLoading(true);
    if (email === '') {
      setLoading(false);
      return { result: 'ERROR', message: 'You must type a valid e-mail' };
    }
    if (password === '') {
      setLoading(false);
      return { result: 'ERROR', message: 'You must type a valid password' };
    }

    const result = await firebase.login(email, password);
    if (!result) {
      setLoading(false);
      return { result: 'ERROR', message: 'Failed to log in to your account' };
    }

    setUser(result);
    setLoading(false);
    return { result: 'SUCCESS' };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged: !!user,
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthInterface => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthProvider;
