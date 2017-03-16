import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { PollsList } from '../../components/';


class MyPollPage extends Component {
  render() {
    const { polls } = this.props;

    return (
      <div>
        Need to change to load only the current user's polls
        <PollsList polls={polls} openPoll={this.props.openPoll} />
      </div>
    );
  }
}

MyPollPage.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  openPoll: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const userId = state.auth.userId;
  const userPollsIds = state.entities.users[userId].polls;
  return ({
    polls: userPollsIds.map(id => state.entities.polls[id])
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MyPollPage);