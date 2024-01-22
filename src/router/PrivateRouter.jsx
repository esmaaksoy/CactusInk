import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { user } = useSelector((state) => state.auth)
  return user.username ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRouter;
