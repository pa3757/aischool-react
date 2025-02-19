import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 구조분해할당을 통해 App 컴포넌트에 변수 전달
let { name, age } = { name: "홍길동", age: 25 };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App name={name} age={age} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
