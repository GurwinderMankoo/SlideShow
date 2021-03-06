import React from "react";

const Slider = props => {
  const customStyle = {
    transform: "translateX(" + props.currentImage + "%)"
  };

  return (
    <div className="slider">
      <div
        className={`img-container ${props.slide ? "applytransition" : null}`}
        style={customStyle}
      >
        {props.images.map((img, i) => {
          return <img src={img} alt="img" key={i} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
