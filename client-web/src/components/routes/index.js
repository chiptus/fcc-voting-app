import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { PrivateRoute } from '../../auth/components';
import { HomePage, MyPollsPage, NewPollPage, PollPage } from '../../containers';

export default () => (
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
      render={({ match: { params: { id } }, history: { push } }) => (
        <PollPage {...{ id, push }} />
      )}
    />
    <Route
      exact
      path="/"
      render={({ history: { push } }) => (
        <HomePage openPoll={createOpenPollFunction(push)} />
      )}
    />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

function createOpenPollFunction(push) {
  return id => push(`/poll/${id}`);
}
