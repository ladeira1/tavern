import React from 'react';
import BagProvider from './contexts/bag';
import GlobalStyles from './assets/GlobalStyles';
import Routes from './routes/index';

import './assets/fonts.css';

const App: React.FC = () => (
  <BagProvider>
    <Routes />
    <GlobalStyles />
  </BagProvider>
);

export default App;
