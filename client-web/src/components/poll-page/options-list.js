import React, { PropTypes } from "react";
import { List } from "material-ui";
import Option from "./option";

const OptionsList = ({ options, vote }) => {
  return (
    <List>
      {options.map(option => (
        <Option key={option._id} {...option} vote={() => vote(option._id)} />
      ))}
    </List>
  );
};

OptionsList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number
    })
  )
};

export default OptionsList;
