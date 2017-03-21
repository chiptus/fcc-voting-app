import { AUTH } from '../constants/actions';
import { SERVER_URL } from '../config';
const {
  AUTH_SET_TOKEN,
  AUTH_DISCARD_TOKEN,
  AUTH_SET_USER,
  REQUEST_LOGIN,
} = AUTH;

import loginAuth from '../auth/auth';

export function login() {
  return dispatch => {
    dispatch(loginRequest());
    return loginAuth().then(
      data => {
        dispatch(authSetToken(data.token));
        dispatch(authSetUser(data.user));
      },
      reason => {
        dispatch(loginFailed(reason.error.message));
      }
    );
  };
}

export function loginFailed(error) {
  return {
    type: REQUEST_LOGIN,
    payload: new Error(error),
    error: true,
  };
}

export function loginRequest() {
  return {
    type: REQUEST_LOGIN,
  };
}

export function authSetToken(token) {
  return {
    type: AUTH_SET_TOKEN,
    payload: token,
  };
}

export function authDiscardToken() {
  return {
    type: AUTH_DISCARD_TOKEN,
  };
}

export function authSetUser(user) {
  return {
    type: AUTH_SET_USER,
    payload: user,
  };
}

export function checkLogin() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    if (!token) {
      return;
    }
    return dispatch({
      type: AUTH.CHECK_LOGIN,
      payload: {
        request: {
          url: `${SERVER_URL}/loggedin`,
        },
      },
    });
  };
}
