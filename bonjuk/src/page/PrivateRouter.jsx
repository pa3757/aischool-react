import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import GoodDetail from "./GoodDetail";

const PrivateRouter = ({ auth }) => {
  return auth ? <GoodDetail /> : <Navigate to="/login" />;
};

export default PrivateRouter;
