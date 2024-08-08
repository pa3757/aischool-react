import React, { useRef, useState } from "react";

const Myref01 = () => {
  const [inputText, setInputText] = useState("");
  const inputText3 = useRef();

  const inputBtn = () => {
    setInputText(inputText3.current.value);
  };

  return (
    <div>
      <input id="inputText" type="text" ref={inputText3} />
      <button onClick={inputBtn}>출력</button>
      <h1>{inputText}</h1>
    </div>
  );
};

export default Myref01;
