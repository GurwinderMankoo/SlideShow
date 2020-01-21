import React from "react";

const LeftArrow = props => {
  return (
    <span className="leftArrow" onClick={props.left}>
      &#10096;
    </span>
  );
};

export default LeftArrow;
