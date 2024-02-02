import { useState, useCallback } from "react";
import { AuthApi } from "../../api";
import { authTokenStore } from "./authTokenStore";


export const useLoginForm = () => {
  const setAuthTokenData = authTokenStore(data=>data.setAuthTokenData);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = useCallback(async () => {
    const response = await AuthApi.login(username, password);
    const token = response?.access_token;
    const expirationTime = response?.expiration_time;
    token && expirationTime && setAuthTokenData(token, expirationTime);
  }, [username, password, setAuthTokenData]);

  return {
    username,
    password,
    login,
    setUsername,
    setPassword,
  };
};
