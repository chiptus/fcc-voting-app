import React, { Component, PropTypes } from 'react';

class NewPollPage extends Component {
  render() {
    return (
      <div>
        NewPollPage
      </div>
    );
  }
}

NewPollPage.propTypes = {
  savePoll: PropTypes.func,
};

export default NewPollPage;