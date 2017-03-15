import * as ACTIONS from '../constants/actions';
import { SERVER_URL } from '../config';

export function createPoll(poll) {
  return dispatch =>
    dispatch(requestCreatePoll(poll))
}

function requestCreatePoll(poll) {
  return {
    type: ACTIONS.REQUEST_CREATE_POLL,
    payload: {
      request: {
        url: `${SERVER_URL}/api/create-poll`,
        data: poll,
        method: 'post'
      },
      options: {
        onSuccess: ({ dispatch, response }) => dispatch(addPoll(response.data.poll, response.data.userId)),
        onError: ({ dispatch, error }) => dispatch(createPollFailed(error)),
      }
    }
  }
}


function addPoll(poll, userId) {
  return {
    type: ACTIONS.ADD_POLL,
    payload: {
      poll,
      time: (new Date()).getTime(),
      userId,
    }
  }
}

function createPollFailed(error) {
  return {
    type: ACTIONS.REQUEST_CREATE_OPTION,
    payload: new Error(error),
    error: true,
  }
}