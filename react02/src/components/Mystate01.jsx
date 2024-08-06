import React from "react";
import { useState } from "react";

const Mystate01 = () => {
  const [num, setNum] = useState(0);
  const Upnum = () => {
    setNum(num + 1);
  };
  const Downnum = () => {
    if (num === 0) {
      return;
    }
    setNum(num - 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => Upnum()}>+1</button>
      <button onClick={() => Downnum()}>-1</button>
    </div>
  );
};

export default Mystate01;
