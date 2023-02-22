import { Outlet, Navigate } from "react-router-dom";
import { LoginStatus } from "../hooks/LoginStatus";
import Loading from "./Loading";

export function PrivateRoute() {
  const { logIn, checkStatus } = LoginStatus();
  if (checkStatus) {
    return <Loading />;
  }
  return logIn ? <Outlet /> : <Navigate to="/Login" />;
}
