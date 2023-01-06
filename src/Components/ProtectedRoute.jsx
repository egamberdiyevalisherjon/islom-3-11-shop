import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, redirect = "/login", role }) => {
  let user = useSelector((state) => state.user);

  return user.role === role ? children : <Navigate to={redirect} />;
};

export default ProtectedRoute;
