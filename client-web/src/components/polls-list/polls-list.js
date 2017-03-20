import React, { PropTypes } from 'react';
import { List, ListItem, IconButton } from 'material-ui';

const pollsList = ({ polls, openPoll, deletePoll }) => {
  return (
    <List style={{ textAlign: 'center' }}>
      {polls.map(poll => (
        <ListItem
          onTouchTap={() => openPoll(poll._id)}
          key={poll._id}
          rightIconButton={
            deletePoll &&
              <IconButton
                iconClassName="fa fa-trash-o"
                onTouchTap={() => deletePoll(poll._id)}
              />
          }>
          {poll.name}
        </ListItem>
      ))}
    </List>
  );
};

pollsList.propTypes = {
  polls: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  openPoll: PropTypes.func,
};

export default pollsList;
