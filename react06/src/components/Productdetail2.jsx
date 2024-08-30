import React from "react";
import { useSearchParams } from "react-router-dom";

const Productdetail2 = () => {
  const [query, setQuery] = useSearchParams();

  console.log(query.get("prd_no"));

  return (
    <div>
      <h1>detail</h1>
      <p>{query.get("prd_no")}번 상품</p>
    </div>
  );
};

export default Productdetail2;
