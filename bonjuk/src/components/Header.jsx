import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ auth, setAuth }) => {
  const navigate = useNavigate();

  const authCheck = () => {
    if (auth) {
      setAuth(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="header-box">
      <div className="header-box-logo">
        <img
          src="https://cdn.bonif.co.kr/resources/web/css/images/logo_gnb.png"
          alt=""
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="header-box-nav">
        <ol className="header-box-nav-list">
          <li
            onClick={() => {
              navigate("/goodlist");
            }}
            style={{ cursor: "pointer" }}
          >
            메뉴소개
          </li>
        </ol>
      </div>
      <div className="header-box-util">
        <button onClick={authCheck} style={{ cursor: "pointer" }}>
          {auth ? "로그아웃" : "로그인"}
        </button>
      </div>
    </div>
  );
};

export default Header;
