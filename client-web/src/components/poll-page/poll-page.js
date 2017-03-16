import React, { Component, PropTypes } from 'react';

import Header from './poll-header';
import OptionsList from './options-list';
import Vote from './vote';
import VotingChart from './voting-chart';
import AddOption from './add-option';
import SocialBar from './social-bar';

export default class PollPage extends Component {
  constructor(props) {
    super(props);


    this.state = {
      voteOptionId: '',
    }

  }

  render() {
    const { poll, isVotedFor, vote, options, addOption } = this.props;
    if (!poll) {
      return null;
    }

    return (
      <div>
        <Header name={poll.name} author={poll.author || 'Unknown'} />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <OptionsList options={options} />
            <AddOption addOption={addOption} pollId={poll._id} />
            <Vote
              options={options}
              vote={() => vote(this.state.voteOptionId)}
              optionId={this.state.voteOptionId}
              isVotedFor={isVotedFor}
              onSelectChange={(id) => this.setState({ voteOptionId: id })} />
          </div>
          <div style={{ flex: 1 }}>
            <VotingChart options={options} />
            <SocialBar poll={poll}/>
          </div>
        </div>
        
      </div>
    );
  }
}

PollPage.propTypes = {
  poll: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string,
  }),
  options: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number
  })),
  vote: PropTypes.func.isRequired,
  isVotedFor: PropTypes.bool,
  addOption: PropTypes.func.isRequired,
};