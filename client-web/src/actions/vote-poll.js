import * as ACTIONS from '../constants/actions';
import axios from 'axios';
import {SERVER_URL} from '../config';

export default function voteForPoll(pollId, optionId) {
  return dispatch => {
    dispatch(requestVoteForPoll(pollId, optionId));
    return axios.post(`${SERVER_URL}/api/poll/${pollId}/vote/${optionId}`)
      .then(result => dispatch(voteSuccess(pollId, optionId)),
        error => dispatch(voteError(error)));
  }
}

function requestVoteForPoll(pollId, optionId) {
  return {
    type: ACTIONS.REQUEST_VOTE,
    payload: {
      pollId,
      optionId,
    }
  }
}

function voteSuccess(pollId, optionId) {
  return {
    type: ACTIONS.RESPONSE_VOTE,
    payload: {
      pollId,
      optionId
    }
  }
}

function voteError(error) {
  return {
    type: ACTIONS.RESPONSE_VOTE,
    payload: new Error(error),
    error: true,
  }
}