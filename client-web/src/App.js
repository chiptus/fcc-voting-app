import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from './theme';

import './App.css';

import { getPolls } from './actions/polls-list';
import { checkLogin, login, authDiscardToken } from './actions/auth';
import { Header, Footer } from './components/layout';
import Routes from './components/routes';

class App extends Component {
  componentWillMount() {
    this.props.checkLogin();
  }

  componentDidMount() {
    this.props.getPolls();
  }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={theme}>

          <div className="container vbox viewport">
            <Header {...this.props} />
            <div className="content">
              <Routes />
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
  username: state.entities.users[state.auth.userId].name,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getPolls: () => dispatch(getPolls()),
  login: () => dispatch(login()),
  logout: () => dispatch(authDiscardToken()),
  checkLogin: () => dispatch(checkLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
