import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  // Check if the user is authenticated (e.g., check the JWT token in cookies)
  const isAuthenticated = !!Cookies.get("jwt_token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
