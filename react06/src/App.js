import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Productpage from "./components/Productpage";
import Productdetail from "./components/Productdetail";
import Productdetail2 from "./components/Productdetail2";
import Privaterouter from "./components/Privaterouter";
import Login from "./components/Login";

// Routes : 요청URL을 묶어서 관리하는 컴포넌트
// Route : 요청 URL에 맞는 화면컴포넌트를 렌더링해주는 컴포넌트

function App() {
  // 로그인 상태를 보관하는 state 생성
  const [login, setLogin] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/product" element={<Productpage />} />
        {/* url parameter pattern */}
        <Route path="/product/:prd_no" element={<Productdetail />}></Route>
        <Route path="/productQuery" element={<Productdetail2 />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/mypage" element={<Privaterouter state={login} />} />
      </Routes>
    </div>
  );
}

export default App;
