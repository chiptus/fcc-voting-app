import React, { PropTypes } from 'react';
import { Chart } from 'react-google-charts'


const VotingChart = ({options}) => {
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={[["Name", "Count"], ...options.map(option => [option.name, option.value])]}
        options={{}}
        graph_id="ScatterChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    </div>
  );
};



VotingChart.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number
  })),
};



export default VotingChart;