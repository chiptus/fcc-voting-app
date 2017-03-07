import React, { PropTypes } from 'react';
import {FlatButton, SelectField, MenuItem} from 'material-ui';

const Vote = ({isVotedFor, options, vote, onSelectChange, optionId}) => {
  if (isVotedFor) {
    return null;
  }

  return (
    <div>
      <SelectField value={optionId} onChange={(_,$,id) => onSelectChange(id)}>
        {options.map(option => <MenuItem primaryText={option.name} key={option._id} value={option._id} />)}
      </SelectField>
      <FlatButton label="vote" onTouchTap={vote} />
    </div> 
  );
};

Vote.propTypes = {
  optionId: PropTypes.string,
  onSelectChange: PropTypes.func.isRequired,
  isVotedFor: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number
  })),
  vote: PropTypes.func.isRequired,
};

export default Vote;