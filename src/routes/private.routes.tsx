import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuth } from '../contexts/auth';

interface RouteInterface {
  path: string;
  component: React.FC;
}

const PrivateRoute: React.FC<RouteInterface> = ({ path, component }) => {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Redirect to="/" />;
  }

  return <Route path={path} component={component} />;
};

export default PrivateRoute;
