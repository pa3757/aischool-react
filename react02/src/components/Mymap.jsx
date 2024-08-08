import React from "react";

const Mymap = () => {
  const menu = ["짬뽕", "짜장면", "냉면", "탕수육"];

  return (
    <div>
      <h1>성수반점</h1>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <hr />
        {/* menu배열중 탕수육을 제외한 나머지만 출력 */}
        {menu
          .filter((item) => item !== "탕수육")
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
};

export default Mymap;
