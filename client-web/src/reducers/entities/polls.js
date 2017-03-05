import * as ACTIONS from '../../constants/actions';

const defaultState = {};

/*
{
  items: [],
  lastUpdated: 0,
};
*/

export default function entitiesPollsReducer(state = defaultState, {type, payload, error, meta}){
  switch (type) {
    case ACTIONS.RECEIVED_POLLS:
      return normalizePolls(payload);
    case ACTIONS.ADD_POLL:
      return {
        ...state,
        [payload.id]: payload,
      };
    case ACTIONS.RESPONSE_VOTE:
      return {
        ...state,
        [payload.pollId]: {
          ...state[payload.pollId],
          options: state[payload.pollId].options.map(o => {
            if (o.id !== payload.optionId) {
              return o;
            }
            return  {
              ...o,
              value: o.value++
            }
          })
        }
      }

    case ACTIONS.CREATE_POLL_REQUEST:
    case ACTIONS.REQUEST_POLLS:
    case ACTIONS.REQUEST_VOTE:
    default:
      return state;
  }
}

function normalizePolls(polls = []) {
  return polls;
  // const normalPolls = polls.map(poll => ({
  //   ...poll,
  //   options: poll.options.map(o => o.id)
  // }))
}

function convertArrayToObject(arr, key) {
  return arr.reduce((acc, cur) => ({
    ...acc,
    [cur[key]]: cur,
  }),{})
}