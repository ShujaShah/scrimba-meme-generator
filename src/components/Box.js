import React, { useState } from "react";
import boxesArr from "../boxes";

const Box = () => {
  const [boxes, setBoxes] = React.useState(boxesArr);

  const handleClick = (event) => {
    const clickedBox = event.target;
    clickedBox.style.backgroundColor = "blue";
  };

  return (
    <div>
      {boxes.map((box) => (
        <div key={box.id} className="box-div" onClick={handleClick}>
          {box.id}
        </div>
      ))}
    </div>
  );
};

export default Box;
