import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GoodDetail = () => {
  // useParam을 사용하여 url에 있는 id값을 가져온다.
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const getDetail = async () => {
    // id값을 이용하여 서버에 상품 정보 요청
    const res = await axios.get(`http://localhost:3004/goods_list/${id}`);
    setDetail(res.data);
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <div className="goods-detail-box">
      <div className="goods-detail-box-thumb">
        <img src={detail?.main_thumb} alt="도시락썸네일" />
      </div>
      <div className="goods-detail-box-info">
        <div className="goods-detail-title">
          <div className="goods-icon">
            {detail?.new ? (
              <em className="goods-new">new</em>
            ) : detail?.best ? (
              <em className="goods-best">best</em>
            ) : null}
          </div>
          <div className="goods-detail-name">{detail?.name}</div>
          <div className="goods-detail-txt">{detail.detail?.txt}</div>
          <div className="goods-detail-price-box">
            <strong>{detail?.price}</strong>
          </div>
        </div>
        <div className="goods-detail-summary">{detail.detail?.summary}</div>
      </div>
    </div>
  );
};

export default GoodDetail;
