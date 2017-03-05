import auth from './auth';
import entities from './entities';
import polls from './polls';

export default function rootReducer(state, action) {
  if (action.error) {
    console.error(action.payload);
  }
  return {
    auth: auth(state, action),
    entities: entities(state, action),
    polls: polls(state, action),
  }
}