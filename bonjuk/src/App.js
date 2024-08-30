import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mainpage from "./page/Mainpage";
import Loginpage from "./page/Loginpage";
import GoodList from "./page/GoodList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import PrivateRouter from "./page/PrivateRouter";

/*
  1. page 폴더 내 4개의 페이지 컴포넌트 생성
  - 메인페이지(main), 로그인페이지(login), 상품전체목록(goodlist), 상품상세페이지(gooddetail)

  2.컴포넌트 4개 생성
  - 헤더(Header), 컨텐츠(Content), 푸터(Footer), 상품정보(GoodInfo)
  
  3. 페이지를 이동할 수 있도록 URL과 페이지 연결
  - index.js 파일에서 BrowserRouter를 사용하여 페이지 이동
  - App.js 파일에서 Route를 사용하여 페이지 이동
  [페이지 경로]
  - 메인페이지: /
  - 로그인페이지: /login
  - 상품전체목록: /goodlist
  - 상품상세페이지: /goodlist/:id
*/

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div>
      <Header auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Loginpage setAuth={setAuth} />} />
        <Route path="/goodlist" element={<GoodList />} />
        <Route path="/goodlist/:id" element={<PrivateRouter auth={auth} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
