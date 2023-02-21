import { Outlet, Navigate } from "react-router-dom";
import { LoginStatus } from "../hooks/LoginStatus";

export function PrivateRoute() {
  const { logIn, checkStatus } = LoginStatus();
  if (checkStatus) {
    return <h3>Loading....</h3>;
  }
  return logIn ? <Outlet /> : <Navigate to="/Login" />;
}
