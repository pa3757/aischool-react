import { useState } from "react";
import "./App.css";
// import Left01 from "./components/Left01";
// import Right01 from "./components/Right01";
import { createContext } from "react";
import Subitem01 from "./components/Subitem01";

// context 생성
export const AppContext = createContext();

function App() {
  // const [num, setNum] = useState(0);
  const [text, setText] = useState("");
  // num,setNum을 Left01, Right01로 전달
  // Right01에서 버튼을 클릭했을 때
  // Left01의 숫자가 증가하도록
  return (
    <div id="container">
      <h1>Context실습</h1>
      <h1>하위에서 넘어온 값 : {text}</h1>
      <div id="grid">
        {/* 
          Provider : 공유공간 생성
          --> 허용된 컴포넌트의 자식 컴포넌트까지 전부 공유
          value : 공유할 데이터
        */}
        {/* <AppContext.Provider value={{ num, setNum }}>
          <Left01 num={num}></Left01>
          <Right01 num={num} setNum={setNum}></Right01> 
          <Left01></Left01>
          <Right01></Right01>
        </AppContext.Provider> */}
        <AppContext.Provider value={{ setText }}>
          <Subitem01></Subitem01>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
