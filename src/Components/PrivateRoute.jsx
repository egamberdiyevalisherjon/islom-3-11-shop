import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirect = "/login" }) => {
  let token = localStorage.getItem("token");

  return token ? children : <Navigate to={redirect} />;
};

export default PrivateRoute;
