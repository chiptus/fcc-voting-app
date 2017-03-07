import * as ACTIONS from '../constants/actions';
import {SERVER_URL} from '../config';

import axios from 'axios';

export function createPoll(poll) {
  return dispatch => {
    dispatch(requestCreatePoll(poll));
    return axios.post(`${SERVER_URL}/api/create-poll`, poll)
      .then(({data}) => {
        dispatch(addPoll(data))
      })
      .catch(error => {
        dispatch(createPollFailed(error));
      })
  }
}

function requestCreatePoll(poll) {
  return {
    type: ACTIONS.REQUEST_CREATE_POLL
  }
}

function addPoll(poll) {
  return {
    type: ACTIONS.ADD_POLL,
    payload: {
      poll,
      time: (new Date()).getTime()
    }
  }
}

function createPollFailed(error){
  return {
    type: ACTIONS.REQUEST_CREATE_OPTION,
    payload: new Error(error),
    error: true,
  }
}