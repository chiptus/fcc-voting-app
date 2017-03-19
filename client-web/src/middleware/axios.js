import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { authDiscardToken } from "../actions/auth";
const client = axiosMiddleware(axios.create({}), {
  interceptors: {
    request: [
      ({ getState }, config) => {
        return {
          ...config,
          params: {
            ...config.params,
            jwt: getState().auth.token
          }
        };
      }
    ],
    response: [
      {
        error: ({ dispatch }, e) => {
          if (e.response.status === 403) {
            return dispatch(authDiscardToken());
          }
          return e;
        }
      }
    ]
  }
});

export default client;
