import React, { Component, PropTypes } from 'react';

class PollPage extends Component {
  render() {
    return (
      <div>
        PollPage
      </div>
    );
  }
}

PollPage.propTypes = {
  poll: PropTypes.object,
  savePoll: PropTypes.func,
};

export default PollPage;