import React from 'react';
import * as dotenv from 'dotenv';

import BagProvider from './contexts/bag';
import GlobalStyles from './assets/GlobalStyles';
import Routes from './routes/index';

import './assets/fonts.css';

dotenv.config();

const App: React.FC = () => (
  <BagProvider>
    <Routes />
    <GlobalStyles />
  </BagProvider>
);

export default App;
