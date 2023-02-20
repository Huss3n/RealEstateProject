import React from "react";
import { Navigate, Outlet } from "react-router";

export default function PrivateRoute() {
  const isLoggedIn = false;
  return isLoggedIn ? <Outlet /> : <Navigate to="/Login" />;
}
