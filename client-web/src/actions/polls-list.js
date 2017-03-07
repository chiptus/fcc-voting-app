import axios from 'axios';

import {SERVER_URL} from '../config';
import * as ACTIONS from '../constants/actions';

export function getPolls() {
  return dispatch => {
    dispatch(requestGetList());
    return axios.get(`${SERVER_URL}/api/polls`)
      .then(response => dispatch(receivedList(response.data)))
      .catch(error => dispatch(requestGetListFailed(error)))
  }
}

function requestGetList() {
  return {
    type: ACTIONS.REQUEST_POLLS,
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