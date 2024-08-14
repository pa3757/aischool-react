import React from "react";
import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";

const MyColor = () => {
  const colorsave = useContext(ColorContext);
  const colorArray = ["red", "orange", "yellow", "green", "blue"];
  let mystyle = {
    width: "100px",
    height: "100px",
    display: "inline-block",
  };
  return (
    <div>
      {colorArray.map((color, index) => {
        return (
          <div
            key={index}
            style={{ ...mystyle, backgroundColor: color }}
            onClick={() => {
              colorsave.setColor(color);
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default MyColor;
