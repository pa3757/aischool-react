import { useState } from "react";
import MyColor from "./components/MyColor";
import Result from "./components/Result";
import { ColorContext } from "./context/ColorContext";

function App2() {
  const [color, setColor] = useState("black");
  return (
    <div>
      <ColorContext.Provider value={{ color, setColor }}>
        <MyColor></MyColor>
        <Result></Result>
      </ColorContext.Provider>
    </div>
  );
}

export default App2;
