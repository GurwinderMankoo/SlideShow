import React, { useState } from "react";
import Slider from "./Slide";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Dots from "./Dots";

import "./styles.css";

const images = [
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
];
export default function App() {
  const [currentPosition, setCurrentPosition] = useState(0);

  const leftImageHandler = () => {
    if (currentPosition >= 0) {
      setCurrentPosition((images.length - 1) * -100);
    } else {
      setCurrentPosition(currentPosition + 100);
    }
  };

  const rightImageHandler = () => {
    if (currentPosition <= (images.length - 1) * -100) {
      setCurrentPosition(0);
    } else {
      setCurrentPosition(currentPosition - 100);
    }
  };

  const goToImageNumber = number => {
    setCurrentPosition(number * -100);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="container">
        <Slider images={images} currentImage={currentPosition} />
        <LeftArrow left={leftImageHandler} />
        <RightArrow right={rightImageHandler} />
        <Dots
          slideCount={images}
          currentActive={currentPosition}
          goTo={goToImageNumber}
        />
      </div>
    </div>
  );
}
