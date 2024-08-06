import React from "react";

const Myteam = (p) => {
  return (
    <div
      style={{
        border: "1px solid",
        margin: "10px auto",
        textAlign: "center",
        width: "400px",
      }}
    >
      <p>{p.team}</p>
      <p>{p.name}</p>
    </div>
  );
};
// defaultProps를 사용하여 기본값을 설정
Myteam.defaultProps = {
  name: "모집중",
};

export default Myteam;
