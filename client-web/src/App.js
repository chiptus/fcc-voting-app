import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, /*NavLink */ } from 'react-router-dom';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import theme from './theme';

import './App.css';
import {getPolls} from './actions/polls-list';
import { Header, Footer } from './components/layout';

import LoginPage from './auth/login-page/login-page';

import { HomePage, MyPollsPage, NewPollPage, PollPage } from './containers';


class App extends Component {
  componentDidMount() {
    this.props.getPolls();
  }

  render() {
    return (
      <BrowserRouter >
        <MuiThemeProvider muiTheme={theme}>

          <div className="container vbox viewport">
            <Header />
            <div className="content">
              <Switch>
                <Route path="/my-polls" render={({push}) => <MyPollsPage openPoll={createOpenPollFunction(push)} />} />
                <Route path="/login" component={LoginPage} />
                <Route path="/new-poll" render={({push}) => <NewPollPage goToList={() => push('/')}/>} />
                <Route path="/poll/:id" render={({match: {params: {id}}, push}) => <PollPage {...{ id, push }} />}>
                </Route>
                <Route path="/" render={({push}) => <HomePage openPoll={createOpenPollFunction(push)}/>} />
              </Switch>
            </div>
            <Footer />
          </div>

        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state,ownProps) => ({
  
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  getPolls: () => dispatch(getPolls()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


function createOpenPollFunction(push) {
  return id => push(`/poll/${id}`)
}