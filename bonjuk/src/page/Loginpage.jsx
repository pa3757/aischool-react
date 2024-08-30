import React from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작 중단
    setAuth(true);
    navigate("/");
  };

  return (
    <div className="login-box">
      <div className="login-box-tit">
        <h2>로그인</h2>
      </div>
      <div className="login-box-form">
        <form action="">
          <div className="input-block">
            <input type="text" placeholder="아이디를 입력해주세요" />
          </div>
          <div className="input-block">
            <input type="password" placeholder="비밀번호를 입력해주세요" />
          </div>
          <div className="submit">
            <input
              type="submit"
              className="login-btn"
              value="로그인"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
