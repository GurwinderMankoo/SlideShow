import React from "react";

const RightArrow = props => {
  return (
    <span className="rightArrow" onClick={props.right}>
      &#10097;
    </span>
  );
};

export default RightArrow;
