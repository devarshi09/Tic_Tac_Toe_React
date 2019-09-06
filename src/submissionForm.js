import React, { Fragment } from "react";

class SubmissionForm extends React.Component {
  render() {
    return (
      <Fragment>
        <form>
          Player 1 Name :{" "}
          <input
            type="text"
            value={this.props.player1}
            onChange={this.props.player1Change}
          />
          <br />
          Player 2 Name :{" "}
          <input
            type="text"
            value={this.props.player2}
            onChange={this.props.player2Change}
          />
        </form>
      </Fragment>
    );
  }
}

export default SubmissionForm;
