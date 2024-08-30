import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";

// 페이지 컴포넌트를 화면에 출력할 수 있도록 라우터 설정
// 로그인 : /login
// ProductAll : /
// ProductDetail : /product/:prd_no

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductAll />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/product/:prd_no" element={<ProductDetail />}></Route>
    </Routes>
  );
}

export default App;
