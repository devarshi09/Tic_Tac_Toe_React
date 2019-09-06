import React, { Fragment } from "react";
import Boxes from "./boxes";

class PlayGame extends React.Component {
  showAll = () => {
    let allBoxes = [];
    for (let i = 0; i < 9; i++) {
      allBoxes.push(
        <Boxes
          changeChance={this.props.changeChance}
          blockSymbol={this.props.blockSymbol}
          index={i}
        />
      );
    }
    return allBoxes;
  };

  render() {
    return (
      <Fragment>
        {this.props.chance ? this.props.player1 : this.props.player2}'s turn
        <br />
        <div className="grid-container">{this.showAll()}</div>
      </Fragment>
    );
  }
}

export default PlayGame;
