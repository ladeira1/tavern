import React from 'react';

import GlobalStyles from './assets/GlobalStyles';
import Routes from './routes/index';
import './assets/fonts.css';

const App: React.FC = () => (
  <>
    <Routes />
    <GlobalStyles />
  </>
);

export default App;
