import React from "react";

const Dots = ({ slideCount, currentActive, goTo }) => {
  return (
    <ul className="dots">
      {slideCount.map((img, i) => {
        return (
          <li
            key={i}
            className={currentActive === i * -100 ? "active" : null}
            onClick={() => goTo(i)}
          >
            {i+1}
          </li>
        );
      })}
    </ul>
  );
};

export default Dots;
