import { combineReducers } from 'redux';

import * as ACTIONS from '../constants/actions';

const defaultState = {
  items: [],
  lastUpdated: 0,
  isFetching: false,
}

export default combineReducers({
  items: pollsItemsReducer,
  lastUpdated: lastUpdatedReducer,
  isFetching: isFetchingReducer,
});

function isFetchingReducer(state = defaultState.isFetching, { type, payload, error, meta }) {
  switch (type) {
    case ACTIONS.ADD_POLL:
    case ACTIONS.RECEIVED_POLLS:
    case ACTIONS.REQUEST_VOTE:
    case ACTIONS.RESPONSE_VOTE:
      return false;
    case ACTIONS.CREATE_POLL_REQUEST:
    case ACTIONS.REQUEST_POLLS:
      return true;
    default:
      return state;
  }
}

function lastUpdatedReducer(state = defaultState.lastUpdated, { type, payload, error, meta }) {
  switch (type) {
    case ACTIONS.ADD_POLL:
      return payload.time;
    case ACTIONS.RECEIVED_POLLS:
      return payload.time;

    case ACTIONS.CREATE_POLL_REQUEST:
    case ACTIONS.REQUEST_POLLS:
    case ACTIONS.REQUEST_VOTE:
    case ACTIONS.RESPONSE_VOTE:
    default:
      return state;
  }
}

function pollsItemsReducer(state = defaultState.items, { type, payload, error, meta }) {
  switch (type) {
    case ACTIONS.ADD_POLL:
      return [payload.poll._id, ...state];
    case ACTIONS.RECEIVED_POLLS:
      return payload.items.map(p => p._id);

    case ACTIONS.CREATE_POLL_REQUEST:
    case ACTIONS.REQUEST_POLLS:
    case ACTIONS.REQUEST_VOTE:
    case ACTIONS.RESPONSE_VOTE:
    default:
      return state;
  }
}

