import { LoginScreen } from "./auth/ui/screens/LoginScreen";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./shared/router/ProtectedRoute";
import GuestRoute from "./shared/router/GuestRoute";
import { AppRoutes } from "./shared/router/routes";
import { HomeScreen } from "./images/ui/screens/HomeScreen";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={AppRoutes.Home} element={<HomeScreen />} />
      </Route>
      <Route element={<GuestRoute />}>
        <Route path={AppRoutes.Login} element={<LoginScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
