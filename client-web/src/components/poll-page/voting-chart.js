import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Chart } from 'react-google-charts'
// import Chart from 'chart.js';


class VotingChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //width: '1000px',
      // height: '500px',
      data: null,
      options: { animation: false, reponsive: true }
    };

    // this._chart = null; // Doesn't really fit the React lifecycle, so keep it out of state
  }


  render() {
    const { width, height } = this.state;
    // const style = { width, height };
    const {options} = this.props;

    return (
      <div className="chart-wrapper" ref="chartWrapper" style={{ height: '100%' }}>
        {/*<canvas ref="canvas" {...style} style={style} />*/}
        <Chart
          chartType="PieChart"
          data={[["Name", "Count"], ...options.map(option => [option.name, option.value])]}
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

  resize() {
    const wrapper = findDOMNode(this.refs.chartWrapper);
    const width = wrapper.clientWidth;
    const height = wrapper.clientHeight;

    // // this next part is imperative to resizing the chart:
    // if (this._chart) {
    //   this._chart.chart.width = width;
    //   this._chart.chart.height = height;
    // }

    this.setState({ width, height });
  }

  // componentDidUpdate() {
  //   if (this._chart) this._chart.destroy();


  //   var ctx = this.refs.canvas.getContext("2d");
  //   const { options: pollOptions } = this.props;
  //   const data = {
  //     labels: pollOptions.map(o => o.name),
  //     datasets: {
  //       data: pollOptions.map(o => o.value),
  //     }
  //   }

  //   // [["Name", "Count"], ...this.props.options.map(option => [option.name, option.value])]
  //   // const chart = new Chart(ctx, { type: 'pie', data, options: this.state.options });
  //   // window.chart = chart;
  //   // this._chart = chart;
  // }
}






VotingChart.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number
  })),
};



export default VotingChart;