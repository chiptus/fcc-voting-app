import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { authDiscardToken } from '../actions/auth';
const client = axiosMiddleware(axios.create({
}), {

    interceptors: {
      request: [({ getState }, config) => {
        return {
          ...config,
          params: {
            ...config.params,
            jwt: getState().auth.token,
          }
        }
      }],
      response: [({ dispatch }, response) => {
        if (response.status === 403) {
          dispatch(authDiscardToken());
        }
        return response;
      }]
    }
  })

export default client;