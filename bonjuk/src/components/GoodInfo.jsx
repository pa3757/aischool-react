import React from "react";
import { useNavigate } from "react-router-dom";

const GoodInfo = ({ good }) => {
  const navigate = useNavigate();

  return (
    <div className="goods-item">
      <div className="goods-thumb">
        {good.new === true ? (
          <div className="goods-item-icon">
            <em className="goods-new">new</em>
          </div>
        ) : null}
        {good.best === true ? (
          <div className="goods-item-icon">
            <em className="goods-best">best</em>
          </div>
        ) : null}
        <img
          src={good.main_thumb}
          alt=""
          onClick={() => {
            // 화면 이동과 함께 해당 상품의 정보 전달
            navigate(`/goodlist/${good.id}`);
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="good-info">
        <div className="goods-name">
          <h4>{good.name}</h4>
        </div>
        <p>
          <span>{good.price}원</span>
        </p>
      </div>
    </div>
  );
};

export default GoodInfo;
