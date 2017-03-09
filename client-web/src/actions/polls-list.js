
import { SERVER_URL } from '../config';
import * as ACTIONS from '../constants/actions';

export function getPolls() {
  return dispatch => {
    dispatch(requestGetList())
      // .then(
      // response => dispatch(receivedList(response.data)),
      // error => dispatch(requestGetListFailed(error))
      // )
  }
}

function requestGetList() {
  return {
    types: [ACTIONS.REQUEST_POLLS, ACTIONS.RECEIVED_POLLS, ACTIONS.REQUEST_POLLS],
    payload: {
      request: {
        url: `${SERVER_URL}/api/polls`,
      },
      options: {
        onSuccess: ({dispatch, response}) => dispatch(receivedList(response.data)),
        onError: ({dispatch, error}) => dispatch(requestGetListFailed(error)),
      }
    }
  }
}

function receivedList(list) {
  return {
    type: ACTIONS.RECEIVED_POLLS,
    payload: {
      time: Date.now(),
      items: list
    }
  }
}

function requestGetListFailed(error) {
  return {
    type: ACTIONS.REQUEST_POLLS,
    payload: new Error(error),
    error: true,
  }
}