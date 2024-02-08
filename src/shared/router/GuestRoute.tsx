import type { FC } from "react";
import { Navigate } from "react-router-dom";
import { authTokenStore } from "../../auth/application/hooks/authTokenStore";
import { LoginScreen } from "../../auth/ui/screens/LoginScreen";
import { AppRoutes } from "./routes";
import { validateExpiration } from "../utils";

const GuestRoute: FC = () => {
  const { authToken, expirationTime } = authTokenStore();

  if (authToken && validateExpiration(expirationTime)) {
    return <Navigate to={AppRoutes.Home} replace />;
  }

  return <LoginScreen />;
};

export default GuestRoute;
