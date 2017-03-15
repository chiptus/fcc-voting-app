import * as ACTIONS from '../constants/actions';

import { SERVER_URL } from '../config';

export default function voteForPoll(pollId, optionId) {
  return {
    type: ACTIONS.REQUEST_VOTE,
    payload: {
      request: {
        url: `${SERVER_URL}/api/poll/${pollId}/vote/${optionId}`,
        method: 'post',
      },
      options: {
        onSuccess: ({ dispatch, response }) => dispatch(voteSuccess(pollId, optionId)),
        onError: ({ dispatch, error }) => dispatch(voteError(pollId, optionId)),
      }
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