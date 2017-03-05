import {combineReducers} from 'redux';

import options from './options';
import polls from './polls';
import users from './users';

export default combineReducers({
  options,
  polls,
  users,
})