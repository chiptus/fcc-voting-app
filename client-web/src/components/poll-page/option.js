import React, { PropTypes } from 'react';

const Option = ({name, value = 0}) => {
  return (
    <div>{name} {value}</div>
  );
};

Option.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default Option;