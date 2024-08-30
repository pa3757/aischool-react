import React from "react";
import Mypage from "./Mypage";
import { Navigate } from "react-router-dom";

// Navigate 컴포넌트
// 지정된 url로 이동하는 컴포넌트

// Privaterouter 역할
// 특정 조건이나 상태에 따라 페이지를 접근할 수 있게 하는 컴포넌트
const Privaterouter = ({ state }) => {
  return state ? <Mypage /> : <Navigate to="/login" />;
};

export default Privaterouter;
