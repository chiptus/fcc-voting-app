import * as ACTIONS from '../constants/actions';
import { SERVER_URL } from '../config';

export function createPoll(poll) {
  return (dispatch, getState) => {
    const state = getState();
    const authorId = state.auth.userId;
    const author = state.entities.users[authorId].name;
    return dispatch(requestCreatePoll({ ...poll, author }));
  };
}

function requestCreatePoll(poll) {
  return {
    type: ACTIONS.REQUEST_CREATE_POLL,
    payload: {
      request: {
        url: `${SERVER_URL}/api/create-poll`,
        data: poll,
        method: 'post',
      },
      options: {
        onSuccess: ({ dispatch, response }) =>
          dispatch(addPoll(response.data.poll, response.data.userId)),
        onError: ({ dispatch, error }) => dispatch(createPollFailed(error)),
      },
    },
  };
}

function addPoll(poll, userId) {
  return {
    type: ACTIONS.ADD_POLL,
    payload: {
      poll,
      time: new Date().getTime(),
      userId,
    },
  };
}

function createPollFailed(error) {
  return {
    type: ACTIONS.REQUEST_CREATE_OPTION,
    payload: new Error(error),
    error: true,
  };
}

export function deletePoll(pollId) {
  // return (dispatch, getState) => {
  // const userId = getState().auth.userId,
  return {
    type: ACTIONS.DELETE_POLL,
    payload: {
      request: {
        url: `${SERVER_URL}/api/poll/${pollId}`,
        method: 'delete',
      },
      options: {
        onSuccess: ({ dispatch, response: { data: { userId } } }) =>
          dispatch(deletePollSuccess(pollId, userId)),
        onError: ({ dispatch, error }) =>
          dispatch(deletePollFailed(error, pollId)),
      },
    },
  };
  // );
  // };
}

export function deletePollSuccess(pollId, userId) {
  return {
    type: ACTIONS.DELETE_POLL_SUCCESS,
    payload: {
      pollId,
      userId,
    },
  };
}

export function deletePollFailed(error, pollId) {
  return {
    type: ACTIONS.DELETE_POLL_FAIL,
    payload: new Error(error),
    meta: {
      pollId,
    },
  };
}
