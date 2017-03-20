import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { preloadedState } from './middleware/local-storage';
import './init/touch-tap';
import 'font-awesome/css/font-awesome.css';

import { createStore } from 'redux';

import { Provider } from 'react-redux';
import middleware from './middleware';

import reducer from './reducers';
const store = createStore(reducer, preloadedState, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
