import * as ACTIONS from '../constants/actions';

export default function pollsReducer(state = [], {type, payload, error, meta}) {
  switch (type) {
    case ACTIONS.ADD_POLL:
      return [payload.id, ...state];
    case ACTIONS.CREATE_POLL_REQUEST:
    case ACTIONS.RECEIVED_POLLS:
    case ACTIONS.REQUEST_POLLS:
    case ACTIONS.REQUEST_VOTE:
    case ACTIONS.RESPONSE_VOTE:
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