import React, { Component, PropTypes } from 'react';
import { Paper } from 'material-ui';

import Header from './poll-header';
import OptionsList from './options-list';
import VotingChart from './voting-chart';
import AddOption from './add-option';
import SocialBar from './social-bar';

import { FB_APPID } from '../../config';

export default class PollPage extends Component {
  render() {
    const { poll, vote, options, addOption, isSignedIn = false } = this.props;
    if (!poll) {
      return null;
    }

    return (
      <Paper
        style={{
          height: 'calc(100% - 37px)',
          width: '60%',
          margin: '0 auto',
          padding: '25px',
        }}
        zDepth={4}>
        <Header name={poll.name} author={poll.author || 'Unknown'} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100% - 88px)',
          }}>
          <div style={{ flex: 1, height: '100%', overflowY: 'auto' }}>
            <OptionsList options={options} vote={vote} />
            {isSignedIn &&
              <AddOption addOption={addOption} pollId={poll._id} />}
          </div>
          <div style={{ flex: 1, height: '100%' }}>
            <VotingChart options={options} />
            <SocialBar poll={poll} fbAppId={FB_APPID} />
          </div>
        </div>

      </Paper>
    );
  }
}

PollPage.propTypes = {
  poll: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string,
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number,
    })
  ),
  vote: PropTypes.func.isRequired,
  isVotedFor: PropTypes.bool,
  addOption: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool,
};
