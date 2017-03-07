import React, { PropTypes } from 'react';

import Option from './option';

const OptionsList = ({options}) => {
  return (
    <div>
      {
        options.map(option => <Option key={option._id} {...option} />)
      }
    </div>
  );
};

OptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number
    }))
};

export default OptionsList;