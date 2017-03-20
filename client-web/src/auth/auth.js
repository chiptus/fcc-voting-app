import hello from 'hellojs';

import axios from 'axios';

import { FB_APPID, SERVER_URL } from '../config';

hello.init({
  facebook: FB_APPID,
});

export default () => {
  return hello('facebook').login().then(response => {
    return axios
      .post(`${SERVER_URL}/auth/facebook`, {
        socialToken: response.authResponse.access_token,
      })
      .then(response => response.data);
  });
};

// function init() {
//   const userStr = localStorage.getItem('user');
//   if (userStr) {
//     return JSON.parse(userStr);
//   }
// }

// function isAuthenticated() {
//   return !!user.jwt;
// }
