import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = true;
  return user ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRouter;
