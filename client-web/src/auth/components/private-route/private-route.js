import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import auth from '../../auth';

const PrivateRoute = ({ component, render, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated() ?
      component ? React.createElement(component, props) : render(props)
      : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)
export default PrivateRoute;