import React, { Fragment } from "react";

const MakeChoice = props => {
  if (props.winner === "") {
    return (
      <Fragment>
        <div
          style={{ paddingLeft: "50%", paddingTop: "10%", paddingBottom: "5%" }}
        >
          <div class="btn btn-warning">
            <div style={{ padding: "10px" }}>Game Drawn</div>
            <div style={{ padding: "10px" }}>
              <button class="btn btn-danger" onClick={props.formSubmission}>
                Exit ?
              </button>
            </div>

            <br />
            <div>
              <button class="btn btn-info" onClick={props.playAgain}>
                New Game ?
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div
          style={{ paddingLeft: "50%", paddingTop: "10%", paddingBottom: "5%" }}
        >
          <div class="btn btn-warning">
            <div style={{ padding: "10px" }}>{props.winner} Won !</div>
            <div style={{ padding: "10px" }}>
              <button class="btn btn-danger" onClick={props.formSubmission}>
                Exit ?
              </button>
            </div>

            <br />
            <div>
              <button class="btn btn-info" onClick={props.playAgain}>
                New Game ?
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default MakeChoice;
