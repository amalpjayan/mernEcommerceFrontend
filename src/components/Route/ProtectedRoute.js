import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isAdmin }) => {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  if (isAuthenticated === false) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (isAdmin === true && user.role !== "admin") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;

  // return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
