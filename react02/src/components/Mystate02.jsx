import React, { useState } from "react";

const Mystate02 = () => {
  const [mynum, setMynum] = useState(0);
  const [randnum, setRandnum] = useState(0);
  // const [result, setResult] = useState("");

  // 버튼 클릭시 어떤 버튼을 클릭했는지 숫자 출력
  // const mynum1 = () => {
  //   setMynum(1);
  //   setRandnum(Math.floor(Math.random() * 3) + 1);
  // };
  // const mynum2 = () => {
  //   setMynum(2);
  //   setRandnum(Math.floor(Math.random() * 3) + 1);
  // };
  // const mynum3 = () => {
  //   setMynum(3);
  //   setRandnum(Math.floor(Math.random() * 3) + 1);
  // };
  // mynum과 randnum이 변경될 때마다 결과를 계산
  // useEffect(() => {
  //   if (mynum === randnum) {
  //     setResult("정답");
  //   } else {
  //     setResult("오답");
  //   }
  // }, [mynum, randnum]);

  const chNum = (e) => {
    setMynum(e.target.textContent);
    setRandnum(Math.floor(Math.random() * 3) + 1);
  };

  return (
    <div>
      <button onClick={chNum}>1</button>
      <button onClick={chNum}>2</button>
      <button onClick={chNum}>3</button>
      <br />
      내가 입력한 숫자 : {mynum}
      <br />
      랜덤한 숫자 : {randnum}
      <br />
      결과 : {mynum == randnum ? "정답" : "오답"}
    </div>
  );
};

export default Mystate02;
