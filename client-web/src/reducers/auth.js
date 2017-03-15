import {AUTH} from '../constants/actions';
const {
  AUTH_SET_TOKEN,
  AUTH_DISCARD_TOKEN,
  AUTH_SET_USER
} = AUTH;

export default function authReducer(state = {userId: '', token: ''}, action){
  switch(action.type){
    // saves the token into the state
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    // discards the current token (logout)
    case AUTH_DISCARD_TOKEN:
      return {};
    // saves the current user
    case AUTH_SET_USER:
      return {
        ...state,
        userId: action.payload._id,
      };
    // as always, on default do nothing
    default:
      return state;
  }
}