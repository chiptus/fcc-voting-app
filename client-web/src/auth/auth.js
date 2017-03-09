import hello from 'hellojs';

import axios from 'axios';

const SERVER_URL = 'http://localhost:8080';
const FACEBOOK_CLIENT_ID = '700042113498773';

hello.init({
  facebook: FACEBOOK_CLIENT_ID,
});


export default () => {
    return hello('facebook')
      .login()
      .then(response => {
        return axios
          .post(`${SERVER_URL}/auth/facebook`, {
            socialToken: response.authResponse.access_token,
          })
          .then(response => response.data)
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
