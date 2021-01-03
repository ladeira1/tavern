import React from 'react';
import * as dotenv from 'dotenv';

import AuthProvider from './contexts/auth';
import BagProvider from './contexts/bag';
import GlobalStyles from './assets/GlobalStyles';
import Routes from './routes/index';

import './assets/fonts.css';

dotenv.config();

const App: React.FC = () => (
  <AuthProvider>
    <BagProvider>
      <Routes />
      <GlobalStyles />
    </BagProvider>
  </AuthProvider>
);

export default App;
