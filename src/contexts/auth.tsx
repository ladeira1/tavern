import React, { useContext, useState, createContext } from 'react';
import firebase from '../services/firebase';

interface UserInterface {
  uid: string;
  name: string;
  email: string;
}

interface AuthInterface {
  isLogged: boolean;
  user: UserInterface | null;
  register: (
    email: string,
    name: string,
    password: string,
    passwordConfirmation: string,
  ) => Promise<AuthReturnInterface>;
  login: (email: string, password: string) => Promise<AuthReturnInterface>;
}

interface AuthReturnInterface {
  result: 'SUCCESS' | 'ERROR';
  message?: string;
}

const AuthContext = createContext<AuthInterface>({} as AuthInterface);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserInterface | null>(null);

  const register = async (
    email: string,
    name: string,
    password: string,
    passwordConfirmation: string,
  ): Promise<AuthReturnInterface> => {
    if (password !== passwordConfirmation) {
      return { result: 'ERROR', message: 'Passwords must match' };
    }

    const result = await firebase.createAccount(email, name, password);
    if (!result) {
      return { result: 'ERROR', message: 'Failed to create your account' };
    }

    setUser(result);
    return { result: 'SUCCESS' };
  };

  const login = async (
    email: string,
    password: string,
  ): Promise<AuthReturnInterface> => {
    if (email === '') {
      return { result: 'ERROR', message: 'You must type a valid e-mail' };
    }
    if (password === '') {
      return { result: 'ERROR', message: 'You must type a valid password' };
    }

    const result = await firebase.login(email, password);
    if (!result) {
      return { result: 'ERROR', message: 'Failed to log in to your account' };
    }

    setUser(result);
    return { result: 'SUCCESS' };
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged: !!user,
        user,
        register,
        login,
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
