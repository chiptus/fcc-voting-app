import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from './theme';

import './App.css';

import { PrivateRoute } from './auth/components';
import { getPolls } from './actions/polls-list';
import { checkLogin } from './actions/auth';
import { login, authDiscardToken } from './actions/auth';
import { Header, Footer } from './components/layout';

// import LoginPage from './auth/login-page/login-page';

import { HomePage, MyPollsPage, NewPollPage, PollPage } from './containers';

class App extends Component {
  componentWillMount() {
    this.props.checkLogin();
  }

  componentDidMount() {
    this.props.getPolls();
  }

  render() {
    const { isLoggedIn, login, logout } = this.props;
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={theme}>

          <div className="container vbox viewport">
            <Header {...{ isLoggedIn, login, logout }} />
            <div className="content">
              <Switch>
                <PrivateRoute
                  path="/my-polls"
                  render={({ push }) => (
                    <MyPollsPage openPoll={createOpenPollFunction(push)} />
                  )}
                />
                <PrivateRoute
                  path="/new-poll"
                  render={({ history }) => (
                    <NewPollPage goToList={() => history.push('/')} />
                  )}
                />
                <Route
                  path="/poll/:id"
                  render={(
                    { match: { params: { id } }, history: { push } }
                  ) => <PollPage {...{ id, push }} />}
                />
                <Route render={() => <Redirect to="/" />} />
                <Route
                  path="/"
                  render={({ history: { push } }) => (
                    <HomePage openPoll={createOpenPollFunction(push)} />
                  )}
                />
              </Switch>
            </div>
            <Footer />
          </div>

        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: !!state.auth.token,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getPolls: () => dispatch(getPolls()),
  login: () => dispatch(login()),
  logout: () => dispatch(authDiscardToken()),
  checkLogin: () => dispatch(checkLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

function createOpenPollFunction(push) {
  return id => push(`/poll/${id}`);
}
