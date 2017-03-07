import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import {PollsList} from '../../components/';


class MyPollPage extends Component {
  render() {
    const {polls} = this.props;

    return (
      <div>
        Need to change to load only the current user's polls
        <PollsList polls={polls} openPoll={this.props.openPoll}/>
      </div>
    );
  }
}

MyPollPage.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  openPoll: PropTypes.func,
};

const mapStateToProps = (state,ownProps) => ({
  polls: state.polls.items.map(pId => state.entities.polls[pId]),
});

const mapDispatchToProps = (dispatch,ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MyPollPage);