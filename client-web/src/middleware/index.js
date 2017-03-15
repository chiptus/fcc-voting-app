import { applyMiddleware } from 'redux';
import axios from './axios';
import thunk from 'redux-thunk';

import {saveMiddleware} from './local-storage';

export default applyMiddleware(
  thunk,
  axios,
  saveMiddleware,
)