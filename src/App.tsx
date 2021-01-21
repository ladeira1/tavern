import React from 'react';
import * as dotenv from 'dotenv';

import LoadingProvider from './contexts/Loading';
import AuthProvider from './contexts/Auth';
import BagProvider from './contexts/Bag';
import GlobalStyles from './assets/GlobalStyles';
import Routes from './routes/index';

import './assets/fonts.css';

dotenv.config();

const App: React.FC = () => (
  <LoadingProvider>
    <AuthProvider>
      <BagProvider>
        <Routes />
        <GlobalStyles />
      </BagProvider>
    </AuthProvider>
  </LoadingProvider>
);

export default App;
