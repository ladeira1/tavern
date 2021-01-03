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
  ) => Promise<RegisterReturnInterface>;
}

interface RegisterReturnInterface {
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
  ): Promise<RegisterReturnInterface> => {
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

  return (
    <AuthContext.Provider
      value={{
        isLogged: !!user,
        user,
        register,
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
