import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, redirect = "/login" }) => {
  let user = useSelector((state) => state.user);

  return user.role ? children : <Navigate to={redirect} />;
};

export default PrivateRoute;
