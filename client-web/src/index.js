import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
