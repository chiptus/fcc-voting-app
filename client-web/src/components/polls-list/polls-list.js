import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui'

const pollsList = ({polls, openPoll}) => {
  return (
    <List style={{textAlign:'center'}}>
      {polls.map(poll => <ListItem onClick={() => openPoll(poll._id)} key={poll._id}>{poll.name}</ListItem>)}
    </List>
  );
};

pollsList.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  openPoll: PropTypes.func,
};

export default pollsList;