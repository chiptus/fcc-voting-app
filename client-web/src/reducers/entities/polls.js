import * as ACTIONS from '../../constants/actions';
import { convertArrayToObject } from './utils';

const defaultState = {};

/*
{
  items: [],
  lastUpdated: 0,
};
*/

export default function entitiesPollsReducer(state = defaultState, { type, payload, error, meta }) {
  switch (type) {
    case ACTIONS.RECEIVED_POLLS:
      return receivedPolls(payload.items);
    case ACTIONS.ADD_POLL:
      return {
        ...state,
        [payload.poll._id]: {
          ...payload.poll,
          options: [
            ...payload.poll.options.map(({_id}) => _id)
          ]
        },
      };
      
    case ACTIONS.ADD_OPTION:
      return {
        ...state,
        [payload.pollId]: {
          ...state[payload.pollId],
          options: [
            ...state[payload.pollId].options,
            payload.option._id,
          ]
        }
      }
    case ACTIONS.RESPONSE_VOTE:
    case ACTIONS.CREATE_POLL_REQUEST:
    case ACTIONS.REQUEST_POLLS:
    case ACTIONS.REQUEST_VOTE:
    default:
      return state;
  }
}

function receivedPolls(polls = []) {
  return convertArrayToObject(polls.map(poll => ({
    ...poll,
    options: poll.options.filter(o => o).map(o => o._id),
  })));
}

// function normalizePolls(polls = []) {
//   return polls;
//   // const normalPolls = polls.map(poll => ({
//   //   ...poll,
//   //   options: poll.options.map(o => o.id)
//   // }))
// }

