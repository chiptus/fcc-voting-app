import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, /*NavLink */ } from 'react-router-dom';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Header, Footer } from './components/layout';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import theme from './theme';

import LoginPage from './auth/login-page/login-page';

import { HomePage, MyPollsPage, NewPollPage, PollPage } from './containers';

import './App.css';

class App extends Component {
  render() {

    return (
      <BrowserRouter >
        <MuiThemeProvider muiTheme={theme}>

          <div className="container vbox viewport">
            <Header />
            <div className="content">
              <Switch>
                <Route path="/my-polls" component={MyPollsPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/new-poll" component={NewPollPage} />
                <Route path="/poll/:id" render={({match: {params: {id}}, push}) => <PollPage {...{ id, push }} />}>
                </Route>
                <Route path="/" component={HomePage} />
              </Switch>
            </div>
            <Footer />
          </div>

        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
