import {AUTH} from '../../constants/actions'

const defaultState = {
  
};

export default function usersReducer(state = defaultState, {type, payload, error, meta}){
  switch (type) {
    case AUTH.AUTH_SET_USER:
      return {
        ...state,
        [payload._id]: payload,
      }
    default:
      return state;
  }
}