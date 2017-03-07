import * as ACTIONS from '../../constants/actions';
import { convertArrayToObject } from './utils';
const defaultState = {

};

export default function optionsReducer(state = defaultState, { type, payload, error, meta }) {
  switch (type) {
    case ACTIONS.ADD_POLL:
      return {
        ...state,
        ...convertArrayToObject(payload.options)
      };
    case ACTIONS.RECEIVED_POLLS:
      return convertArrayToObject(
        payload.items
          .map(poll => poll.options.filter(d => d))
          .reduce((acc, pollOptions) => [...acc, ...pollOptions], [])
      );
    case ACTIONS.CREATE_OPTION:
      return {
        ...state,
        [payload.option.id]: payload.option,
      }
      
    case ACTIONS.RESPONSE_VOTE:  
    case ACTIONS.REQUEST_CREATE_OPTION:
    case ACTIONS.CREATE_POLL_REQUEST:
    case ACTIONS.REQUEST_POLLS:
    case ACTIONS.REQUEST_VOTE:
    default:
      return state;
  }
}