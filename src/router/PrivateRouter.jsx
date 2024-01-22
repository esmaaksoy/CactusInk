import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = false;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
