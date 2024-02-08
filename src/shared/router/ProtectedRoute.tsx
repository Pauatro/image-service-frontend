import type { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authTokenStore } from "../../auth/application/hooks/authTokenStore";
import { AppRoutes } from "./routes";
import { validateExpiration } from "../utils";

const ProtectedRoute: FC = () => {
  const { authToken, expirationTime } = authTokenStore();

  if (!authToken || !validateExpiration(expirationTime)) {
    return <Navigate to={AppRoutes.Login} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
