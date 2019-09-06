import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PlayGame from "./playgame";
import SubmissionForm from "./submissionForm";
import MakeChoice from "./makechoice";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionForm: true,
      player1: "",
      player2: "",
      blocks: [false, false, false, false, false, false, false, false, false],
      blockSymbol: [null, null, null, null, null, null, null, null, null],
      chance: true,
      end: false,
      winner: ""
    };
  }

  formSubmission = () => {
    this.setState({
      submissionForm: true,
      player1: "",
      player2: "",
      blocks: [false, false, false, false, false, false, false, false, false],
      blockSymbol: [null, null, null, null, null, null, null, null, null],
      chance: true,
      end: false,
      winner: ""
    });
  };

  playAgain = () => {
    this.setState({
      blocks: [false, false, false, false, false, false, false, false, false],
      blockSymbol: [null, null, null, null, null, null, null, null, null],
      chance: true,
      end: false,
      winner: ""
    });
  };

  playStart = () => {
    this.setState({
      submissionForm: !this.state.submissionForm
    });
  };

  isDraw = () => {
    for (let i = 0; i < 9; i++) {
      if (this.state.blocks[i] === false) return false;
    }
    return true;
  };

  checkWin = () => {
    if (
      this.state.blockSymbol[0] !== null &&
      this.state.blockSymbol[0] === this.state.blockSymbol[1] &&
      this.state.blockSymbol[1] === this.state.blockSymbol[2]
    ) {
      return true;
    }
    if (
      this.state.blockSymbol[0] !== null &&
      this.state.blockSymbol[0] === this.state.blockSymbol[3] &&
      this.state.blockSymbol[0] === this.state.blockSymbol[6]
    ) {
      return true;
    }
    if (
      this.state.blockSymbol[3] !== null &&
      this.state.blockSymbol[3] === this.state.blockSymbol[4] &&
      this.state.blockSymbol[4] === this.state.blockSymbol[5]
    ) {
      return true;
    }
    if (
      this.state.blockSymbol[1] !== null &&
      this.state.blockSymbol[1] === this.state.blockSymbol[4] &&
      this.state.blockSymbol[4] === this.state.blockSymbol[7]
    ) {
      return true;
    }
    if (
      this.state.blockSymbol[6] !== null &&
      this.state.blockSymbol[6] === this.state.blockSymbol[7] &&
      this.state.blockSymbol[7] === this.state.blockSymbol[8]
    ) {
      return true;
    }
    if (
      this.state.blockSymbol[8] !== null &&
      this.state.blockSymbol[8] === this.state.blockSymbol[2] &&
      this.state.blockSymbol[2] === this.state.blockSymbol[5]
    ) {
      return true;
    }
    if (
      this.state.blockSymbol[0] !== null &&
      this.state.blockSymbol[0] === this.state.blockSymbol[4] &&
      this.state.blockSymbol[4] === this.state.blockSymbol[8]
    ) {
      return true;
    }
    if (
      this.state.blockSymbol[4] !== null &&
      this.state.blockSymbol[4] === this.state.blockSymbol[2] &&
      this.state.blockSymbol[4] === this.state.blockSymbol[6]
    ) {
      return true;
    }
    return false;
  };
  changeChance = e => {
    e--;
    if (this.state.blocks[e] === false && this.state.end === false) {
      let tempp = this.state.blockSymbol;

      if (this.state.chance) {
        tempp[e] = "X";
      } else {
        tempp[e] = "O";
      }

      this.setState({
        blockSymbol: tempp
      });

      let temp = this.state.blocks;
      temp[e] = 1;
      this.setState({
        blocks: temp
      });

      if (this.checkWin()) {
        let won;
        this.state.chance
          ? (won = this.state.player1)
          : (won = this.state.player2);
        this.setState({
          end: true,
          winner: won
        });
      }

      if (this.isDraw()) {
        this.setState({
          end: true
        });
      }
      if (this.state.end === false && !this.isDraw() && !this.checkWin()) {
        this.setState({
          chance: !this.state.chance
        });
      }
    }
  };

  player1Change = event => {
    this.setState({
      player1: event.target.value
    });
  };

  player2Change = event => {
    this.setState({
      player2: event.target.value
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.submissionForm ? (
          <div class="container">
            <div class="center">
              <SubmissionForm
                player1={this.state.player1}
                player2={this.state.player2}
                player1Change={this.player1Change}
                player2Change={this.player2Change}
              />
              <div style={{ paddingTop: "15px", paddingLeft: "130px" }}>
                <button onClick={this.playStart} className="btn btn-primary">
                  Start
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <PlayGame
              chance={this.state.chance}
              player1={this.state.player1}
              player2={this.state.player2}
              changeChance={this.changeChance}
              blockSymbol={this.state.blockSymbol}
            />
            {this.state.end && (
              <MakeChoice
                winner={this.state.winner}
                formSubmission={this.formSubmission}
                playAgain={this.playAgain}
              />
            )}
          </div>
        )}
      </Fragment>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#root"));
