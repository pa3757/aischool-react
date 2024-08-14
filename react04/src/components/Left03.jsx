import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Left03 = () => {
  const data = useContext(AppContext);
  return (
    <div>
      <h1>Left03</h1>
      <h1>{data.num}</h1>
    </div>
  );
};

export default Left03;
