import React, { Component, PropTypes } from 'react';

import Header from './poll-header';
import OptionsList from './options-list';
import Vote from './vote';

export default class PollPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteOptionId: '',
    }

  }

  render() {
    const { poll, isVotedFor, vote, options } = this.props;
    if (!poll) {
      return null;
    }

    return (
      <div>
        <Header name={poll.name} />
        <OptionsList options={options} />
        <Vote
          options={options}
          vote={() => vote(this.state.voteOptionId)}
          optionId={this.state.voteOptionId}
          isVotedFor={isVotedFor}
          onSelectChange={(id) => this.setState({ voteOptionId: id })} />
      </div>
    );
  }
}

PollPage.propTypes = {
  poll: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  options: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number
  })),
  vote: PropTypes.func.isRequired,
  isVotedFor: PropTypes.bool,
};