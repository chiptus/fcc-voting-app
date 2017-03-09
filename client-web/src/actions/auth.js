import {AUTH} from '../constants/actions';
const {
  AUTH_SET_TOKEN,
  AUTH_DISCARD_TOKEN,
  AUTH_SET_USER,
  REQUEST_LOGIN
} = AUTH;

import loginAuth from '../auth/auth';

export function login() {
  return dispatch => {
    dispatch(loginRequest());
    return loginAuth()
      .then(
        data => {
          dispatch(authSetToken(data.token));
          dispatch(authSetUser(data.user));
        },
        error => {
          dispatch(loginFailed(error))
        } 
      )
  }
}

export function loginFailed(error) {
  return {
    type: REQUEST_LOGIN,
    payload: new Error(error),
    error: true,
  }
}

export function loginRequest() {
  return {
    type: REQUEST_LOGIN,
  }
}

export function authSetToken(token) {
  return {
    type: AUTH_SET_TOKEN,
    payload: token
  };
}

export function authDiscardToken() {
  return {
    type: AUTH_DISCARD_TOKEN
  };
}

export function authSetUser(user) {
  return {
    type: AUTH_SET_USER,
    payload: user
  };
}