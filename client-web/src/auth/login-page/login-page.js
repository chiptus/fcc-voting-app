import React, { Component } from 'react';

import './login-page.css';
import img from './github_32px.png';

console.log(img);
class LoginPage extends Component {

  render() {
    console.log("asdad");
    return (
      <div>
        <a href="http://localhost:8080/auth/github">
          <div className="btn" id="login-btn">
            <img src={img} alt="github logo" />
            <p>LOGIN WITH GITHUB</p>
          </div>
        </a>
      </div>
    );
  }
}

export default LoginPage;