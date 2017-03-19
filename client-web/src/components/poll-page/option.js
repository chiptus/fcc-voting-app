import React, { PropTypes } from "react";

import { ListItem } from "material-ui";

const Option = ({ name, value = 0, vote }) => {
  return <ListItem onTouchTap={vote}>{name} {value}</ListItem>;
};

Option.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number
};

export default Option;
