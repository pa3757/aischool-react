import React from "react";
import { useNavigate } from "react-router-dom";

const Productpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Productpage</h1>
      <button
        onClick={() => {
          // QueryString을 이용한 페이지 이동
          // 다음 페이지로 이동할 때 데이터를 전달하는 방식(?key=value)
          navigate("/productQuery?prd_no=15");
        }}
      >
        Productdetail2로 이동
      </button>
    </div>
  );
};

export default Productpage;
