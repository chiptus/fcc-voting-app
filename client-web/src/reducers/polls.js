import * as ACTIONS from '../constants/actions';

export default function pollsReducer(state = [], {type, payload, error, meta}) {
  switch (type) {
    case ACTIONS.ADD_POLL:
      return [payload.id, ...state];
    case ACTIONS.RECEIVED_POLLS:
      return payload.map(p => p.id);

    case ACTIONS.CREATE_POLL_REQUEST:
    case ACTIONS.REQUEST_POLLS:
    case ACTIONS.REQUEST_VOTE:
    case ACTIONS.RESPONSE_VOTE:
    default:
      return state;
  }
}

