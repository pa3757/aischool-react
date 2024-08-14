import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useRef } from "react";

const Subitem03 = () => {
  const data = useContext(AppContext);
  const text = useRef();
  return (
    <div>
      <input id="text" type="text" ref={text} />
      <button
        onClick={() => {
          data.setText(text.current.value);
        }}
      >
        전송
      </button>
    </div>
  );
};

export default Subitem03;
