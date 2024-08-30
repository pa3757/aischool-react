import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLogin }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>로그인</h1>
      <button
        onClick={() => {
          setLogin(true);
          navigate("/");
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;
