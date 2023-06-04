import React, { useState } from "react";
import boxesArr from "../boxes";

const Box = () => {
  const [boxes, setBoxes] = React.useState(boxesArr);
  return (
    <div>
      {boxes.map((box) => (
        <div key={box.id} className="box-div">
          {box.id}
        </div>
      ))}
    </div>
  );
};

export default Box;
