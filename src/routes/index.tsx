import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './private.routes';

import Home from '../pages/Home';
import CreateItem from '../pages/CreateItem';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Checkout from '../pages/Checkout';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/checkout" component={Checkout} />
      <PrivateRoute path="/item" component={CreateItem} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
