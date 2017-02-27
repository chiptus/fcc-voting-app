import React, { Component } from 'react';
import { BrowserRouter, Route, /*NavLink */ } from 'react-router-dom';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Header, Footer } from './components/layout';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import theme from './theme';

import LoginPage from './auth/login-page/login-page';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter >
        <MuiThemeProvider muiTheme={theme}>

          <div className="container">
            <Header />
            <div className="content">
              <Route path="/login" component={LoginPage} />
              <Route path="/test" component={"div"} />
            </div>
            <Footer />
          </div>

        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
