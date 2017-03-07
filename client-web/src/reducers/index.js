import {combineReducers} from 'redux';

import auth from './auth';
import entities from './entities';
import polls from './polls';

const rootReducer = combineReducers({auth, entities, polls});

export default function rootReducerWrapper(state, action) {
  if (action.error) {
    console.error(action.payload);
  }
  return rootReducer(state, action);
}