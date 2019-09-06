import React, { Fragment } from "react";

const MakeChoice = props => {
  if (props.winner === "") {
    return (
      <Fragment>
        <div>Game Drawn</div>
        <button onClick={props.formSubmission}>Exit ?</button>
        <br />
        <button onClick={props.playAgain}>New Game ?</button>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Fragment>
          <div>{props.winner} Won !</div>
          <button onClick={props.formSubmission}>Exit ?</button>
          <br />
          <button onClick={props.playAgain}>New Game ?</button>
        </Fragment>
      </Fragment>
    );
  }
};

export default MakeChoice;
