import React from "react";
import { useNavigate } from "react-router-dom";

const Aboutpage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Aboutpage</h1>
      <button onClick={() => navigate("/")}>홈페이지로 이동</button>
    </div>
  );
};

export default Aboutpage;
