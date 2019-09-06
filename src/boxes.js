import React, { Fragment } from "react";

const Boxes = props => {
  return (
    <Fragment>
      <div
        className="grid-item"
        onClick={() => props.changeChance(props.index + 1)}
      >
        {props.blockSymbol[props.index]}
      </div>
    </Fragment>
  );
};

export default Boxes;
