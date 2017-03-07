import {connect} from 'react-redux';

import {voteForPoll} from '../../actions/poll';

import PollPage from '../../components/poll-page';

const mapStateToProps = (state,ownProps) => ({
  poll: state.entities.polls[ownProps.id],
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  vote: (optionId) => dispatch(voteForPoll(ownProps.id, optionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PollPage);