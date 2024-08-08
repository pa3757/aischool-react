import React, { useState } from "react";

const Mystate03 = () => {
  const [cnt, setCnt] = useState(0);
  const upNum = () => {
    setCnt(cnt + 1);
  };
  const downNum = () => {
    if (cnt === 0) {
      return;
    }
    setCnt(cnt - 1);
  };
  const resetNum = () => {
    setCnt(0);
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid",
          margin: "10px auto",
          textAlign: "center",
          width: "250px",
          padding: "10px",
        }}
      >
        <span>Like!</span>
        <span>♥</span>
        {cnt}
        <br />
        <button onClick={upNum}>+1증가</button>
        <button onClick={downNum}>-1감소</button>
        <button onClick={resetNum}>초기화</button>
      </div>
    </div>
  );
};

export default Mystate03;
