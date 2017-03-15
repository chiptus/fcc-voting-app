import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { authDiscardToken } from './actions/auth';
const client = axiosMiddleware(axios.create({
}), {

    interceptors: {
      request: [({ getState }, config) => {
        return {
          ...config,
          params: {
            ...config.params,
            jwt: getState().auth.token,
          }
        }
      }],
      response: [({ dispatch }, response) => {
        if (response.status === 403) {
          dispatch(authDiscardToken());
        }
        return response;
      }]
    }
  })



import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    client)
);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
