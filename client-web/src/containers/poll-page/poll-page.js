import {connect} from 'react-redux';

import voteForPoll from '../../actions/vote-poll';

import PollPage from '../../components/poll-page';

const mapStateToProps = (state,ownProps) => ({
  poll: state.entities.polls[ownProps.id],
  options: state.entities.polls[ownProps.id] && state.entities.polls[ownProps.id].options.map(id => state.entities.options[id])
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  vote: (optionId) => dispatch(voteForPoll(ownProps.id, optionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PollPage);