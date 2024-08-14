import React from "react";
import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";

const Result = () => {
  const color = useContext(ColorContext);
  let mystyle = {
    width: "100px",
    height: "100px",
    display: "inline-block",
  };
  return (
    <div>
      <div style={{ ...mystyle, backgroundColor: color.color }}></div>
    </div>
  );
};

export default Result;
