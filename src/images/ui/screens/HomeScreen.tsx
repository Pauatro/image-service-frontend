import type { FC } from "react"
import { Button } from "../../../shared/ui/components/Button";
import { authTokenStore } from "../../../auth/application/hooks/authTokenStore";

export const HomeScreen: FC = () => {

  const { resetAuthToken } = authTokenStore();

  return (
    <div className="p-8 flex flex-col items-start">
      <Button onClick={resetAuthToken}>Logout</Button>
    </div>
  );
};
