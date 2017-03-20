import { AUTH, ADD_POLL, DELETE_POLL_SUCCESS } from '../../constants/actions';

const defaultState = {};

export default function usersReducer(
  state = defaultState,
  { type, payload, error, meta }
) {
  switch (type) {
    case AUTH.AUTH_SET_USER:
      return {
        ...state,
        [payload._id]: payload,
      };
    case ADD_POLL:
      return {
        ...state,
        [payload.userId]: {
          ...state[payload.userId],
          polls: [...state[payload.userId].polls, payload.poll._id],
        },
      };

    case DELETE_POLL_SUCCESS:
      return {
        ...state,
        [payload.userId]: {
          ...state[payload.userId],
          polls: state[payload.userId].polls.filter(
            id => id !== payload.pollId
          ),
        },
      };

    default:
      return state;
  }
}
