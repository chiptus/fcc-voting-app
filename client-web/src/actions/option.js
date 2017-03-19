import * as ACTIONS from '../constants/actions';
import { SERVER_URL } from '../config';

export default function addOptionRequest(pollId, option) {
  return {
    type: ACTIONS.REQUEST_CREATE_OPTION,
    payload: {
      request: {
        url: `${SERVER_URL}/api/poll/${pollId}/add-option/${option}`,
        method: 'post',
      },
      options: {
        onSuccess: ({ dispatch, response }) =>
          dispatch(addOption(pollId, response.data)),
        onError: ({ dispatch, error }) => dispatch(addOptionFail(error)),
      },
    },
  };
}

function addOption(pollId, poll) {
  return {
    type: ACTIONS.ADD_OPTION,
    payload: {
      pollId,
      poll,
    },
  };
}

function addOptionFail(error) {
  return {
    type: ACTIONS.ADD_OPTION,
    payload: new Error(error),
    error: true,
  };
}
