import React from "react";

const App2 = () => {
  let name = prompt("이름을 입력하세요");
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let season = "";
  if (month >= 3 && month <= 5) {
    season = "봄";
  } else if (month >= 6 && month <= 8) {
    season = "여름";
  }
  if (month >= 9 && month <= 11) {
    season = "가을";
  }
  if (month === 12 || month === 1 || month === 2) {
    season = "겨울";
  }

  return (
    <div>
      <h1>
        {year}.{month}.{day}
      </h1>
      <hr></hr>
      <p>
        {name}님 지금은 {season} 입니다. 좋은하루 보내세요!
      </p>
      <h1 style={{ color: "red" }}>오늘은 월요일</h1>

      {/* 준수를 제외한 다른 사람은 야근 */}
      {name === "준수" ? <h1>칼퇴</h1> : <h1>야근</h1>}
    </div>
  );
};

export default App2;
