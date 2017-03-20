import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { PollsList } from '../../components/';
import { deletePoll } from '../../actions/poll';
class MyPollPage extends Component {
  render() {
    const { polls, userName, openPoll, deletePoll } = this.props;

    return (
      <div>
        <h1>{userName}</h1>
        <PollsList polls={polls} openPoll={openPoll} deletePoll={deletePoll} />
      </div>
    );
  }
}

MyPollPage.propTypes = {
  polls: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  openPoll: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  deletePoll: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const userId = state.auth.userId;
  const { polls: userPollsIds, name } = state.entities.users[userId];
  return {
    polls: userPollsIds.map(id => state.entities.polls[id]),
    userName: name,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deletePoll: id => dispatch(deletePoll(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPollPage);
