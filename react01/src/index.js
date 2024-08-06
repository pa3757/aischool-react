import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import App2 from "./App2";
import Myteam from "./components/Myteam";
// import Menu from "./components/Menu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <App2 /> */}
    {/* props로 전달 */}
    {/* <Menu menu="아메리카노" price="4500" />
    <Menu menu="카페라떼" price="5000" /> */}
    <Myteam team="교육운영부" name="선영표" />
    <Myteam team="전략기획팀" name="강예진" />
    <Myteam team="홍보팀" name="임보미" />
    <Myteam team="기획팀" name="최영화" />

    <Myteam team="연구개발팀" />
  </div>
);

reportWebVitals();
