import defaultState from './default-state';

import * as Actions from '../constants/actions';

export default (state = defaultState, {type, payload, error}) => {
  switch (type) {
    case Actions.ADD_POLL:
      return addPoll(state, payload);
    case Actions.CREATE_POLL_REQUEST:
    case Actions.RECEIVED_POLLS:
    case Actions.REQUEST_POLLS:
    case Actions.REQUEST_VOTE:
    case Actions.RESPONSE_VOTE:
    default:
      return state;
  }
}


function addPoll(state, poll) {
  if (state.auth.userId === poll.created_by_user_id) {
    //change user object to contain a reference to the poll
  }
  //add poll to polls array,
  // add options to options entity 
  // add poll (normalized) to polls entity
}