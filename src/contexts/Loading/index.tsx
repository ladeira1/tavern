import React, { useContext, useState, createContext } from 'react';
import { LoadingInterface } from './interfaces';

const LoadingContext = createContext<LoadingInterface>({} as LoadingInterface);

const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingInterface => {
  const context = useContext(LoadingContext);
  return context;
};

export default LoadingProvider;
