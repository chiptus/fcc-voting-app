import React, { Component, PropTypes } from 'react';

import { TextField, FlatButton } from 'material-ui'

import {connect} from 'react-redux';

import {createPoll} from '../../actions/poll';

class NewPollPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      options: '',
      errors: {
        name: '',
        options: '',
      }
    }
  }

  submit = (name, options) => {
    if (!name) {
      this.setState({ errors: { name: 'This field is required' } })
      return;
    }
    if (!options) {
      this.setState({ errors: { options: 'This field is required' } })
      return;
    }
    this.props.createPoll({ name, options: options.split(/\n/) });
    return this.props.goToList();
  }

  render() {
    const { name, options } = this.state;

    return (
      <div>
        <div>
          <TextField
            floatingLabelText="Name"
            errorText={this.state.errors.name}
            value={name}
            onChange={(_, name) => this.setState({ name })} />
        </div>
        <div>
          <TextField
            floatingLabelText="Options"
            value={options}
            errorText={this.state.errors.options}            
            onChange={(_, options) => this.setState({ options })}
            multiLine
            hintText="Separated by new line" />
        </div>
        <div>
          <FlatButton label="Submit" onTouchTap={() => this.submit(name, options)} />
        </div>

      </div>
    );
  }
}

NewPollPage.propTypes = {
  createPoll: PropTypes.func.isRequired,
  goToList: PropTypes.func.isRequired,
};


const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({
  createPoll: (poll) => dispatch(createPoll(poll)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPollPage);