import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {connect} from 'react-redux'


const PrivateRoute = ({ component, render, isLoggedIn, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn ?
      component ? React.createElement(component, props) : render(props)
      : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: !!state.auth.token
})

export default connect(mapStateToProps)(PrivateRoute);