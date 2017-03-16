import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { PollsList } from '../../components/';


class MyPollPage extends Component {
  render() {
    const { polls, userName } = this.props;

    return (
      <div>
        <h1>{userName}</h1>
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
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const userId = state.auth.userId;
  const {polls: userPollsIds, name} = state.entities.users[userId];
  return ({
    polls: userPollsIds.map(id => state.entities.polls[id]),
    userName: name,
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MyPollPage);