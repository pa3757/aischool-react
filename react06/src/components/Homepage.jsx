import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const Gotoproduct = () => {
    navigate("/product/1");
  };

  return (
    <div>
      <h1>Homepage</h1>
      <Link to={"/about"}>About페이지로 이동</Link>
      <button onClick={Gotoproduct}>Product페이지로 이동</button>
      <Link to={"/mypage"}>Mypage페이지로 이동</Link>
    </div>
  );
};

export default Homepage;
