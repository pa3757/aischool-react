import React, { useEffect, useState } from "react";
import axios from "axios";
import GoodInfo from "../components/GoodInfo";

const GoodList = () => {
  const [goods, setGoods] = useState([]);

  const getGoods = async () => {
    const res = await axios.get("http://localhost:3004/goods_list");
    setGoods(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getGoods();
  }, []);

  return (
    <div className="goods-list">
      {goods.map((good) => (
        <GoodInfo key={good.id} good={good} />
      ))}
    </div>
  );
};

export default GoodList;
