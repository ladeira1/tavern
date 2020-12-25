import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CreateItem from '../pages/CreateItem';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/item" component={CreateItem} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
