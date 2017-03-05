import React, { Component, PropTypes } from 'react';

class MyPollPage extends Component {
  render() {
    return (
      <div>
        MyPollPage
      </div>
    );
  }
}

MyPollPage.propTypes = {
  poll: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.object,
  }),
  deletePoll: PropTypes.func,
  editPoll: PropTypes.func,
  voteForPoll: PropTypes.func,
};

export default MyPollPage;