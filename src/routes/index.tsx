import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './private.routes';

import Home from '../pages/Home';
import CreateItem from '../pages/CreateItem';
import Register from '../pages/Register';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/item" component={CreateItem} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
