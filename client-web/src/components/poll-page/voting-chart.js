import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Chart } from 'react-google-charts';
// import Chart from 'chart.js';

class VotingChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //width: '1000px',
      // height: '500px',
      data: null,
      options: { animation: false, reponsive: true },
    };

    // this._chart = null; // Doesn't really fit the React lifecycle, so keep it out of state
  }

  render() {
    const { width, height } = this.state;
    // const style = { width, height };
    const { options } = this.props;

    return (
      <div
        className="chart-wrapper"
        ref="chartWrapper"
        style={{ height: '100%' }}>
        {/*<canvas ref="canvas" {...style} style={style} />*/}
        <Chart
          chartType="PieChart"
          data={[
            ['Name', 'Count'],
            ...options.map(option => [option.name, option.value]),
          ]}
          options={{}}
          graph_id="VotingChart"
          width={width + 'px'}
          height={height + 'px'}
          legend_toggle
        />
      </div>
    );
  }

  componentDidMount() {
    // you would load initial data here first

    this.resize();

    (window.onresize = () => {
      this.resize();
    })();
  }

  componentWillUnmount() {
    console.log('dis');
    window.onresize = null;
  }

  resize() {
    const wrapper = findDOMNode(this.refs.chartWrapper);
    const width = wrapper.clientWidth;
    const height = wrapper.clientHeight;

    this.setState({ width, height });
  }
}

VotingChart.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number,
    })
  ),
};

export default VotingChart;
