import React, { Component, PropTypes } from 'react';


import {PollsList} from '../../components/';


class HomePage extends Component {
  render() {
    const polls = [
      {id: "0", name: "chaman"},
      {id: "1", name:"wlla"}
    ];

    return (
      <div>
        <PollsList polls={polls} openPoll={this.props.openPoll}/>
      </div>
    );
  }
}

HomePage.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  openPoll: PropTypes.func,
};

export default HomePage;