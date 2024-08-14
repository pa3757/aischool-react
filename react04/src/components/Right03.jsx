import React from "react";
// context 접근
import { useContext } from "react";
import { AppContext } from "../App";

const Right03 = () => {
  // context

  const data = useContext(AppContext);
  return (
    <div>
      <h1>Right03</h1>
      <button
        onClick={() => {
          data.setNum(data.num + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Right03;
