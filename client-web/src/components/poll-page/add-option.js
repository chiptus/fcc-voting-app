import React, { PropTypes, Component } from "react";
import { FlatButton, Dialog, TextField } from "material-ui";

class AddOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
      option: ""
    };
  }

  handleOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  save = () => {
    const { option } = this.state;
    const { pollId } = this.props;
    if (!option) {
      this.setError("This Field is required");
      return;
    }
    return this.props
      .addOption(pollId, option)
      .then(() => this.handleClose(), error => this.setError(error));
  };

  setError(error) {
    this.setState({ error });
  }

  render() {
    const { dialogOpen, option } = this.state;
    return (
      <div>
        <FlatButton label="Add Option" onTouchTap={this.handleOpen} />

        <Dialog
          title="Add Option To Poll"
          actions={[
            <FlatButton label="Save" onTouchTap={this.save} />,
            <FlatButton label="Cancel" onTouchTap={this.handleClose} />
          ]}
          open={dialogOpen}
          onRequestClose={this.handleClose}
        >
          <TextField
            id="add-option"
            value={option}
            onChange={(_, option) => this.setState({ option })}
          />

        </Dialog>
      </div>
    );
  }
}

AddOption.propTypes = {
  addOption: PropTypes.func.isRequired,
  pollId: PropTypes.string.isRequired
};

export default AddOption;
