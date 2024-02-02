import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthTokenStore {
  setAuthTokenData: (newAuthToken: string, expirationTime: number) => void;
  authToken: string;
  expirationTime: number,
  resetAuthToken: () => void;
}

const initialAuthTokenSettings = {
    authToken: "",
    expirationTime: 0,
};

export const authTokenStore = create<AuthTokenStore>()(
  persist(
    set => ({
      ...initialAuthTokenSettings,
      resetAuthToken: () =>
        set(initialAuthTokenSettings),
      setAuthTokenData: (newAuthToken: string, newExpirationTime: number) =>
        set({ authToken: newAuthToken, expirationTime: newExpirationTime }),
    }),
    {
      storage: createJSONStorage(() => localStorage),
      name: "auth-token",
      version: 0,
    },
  ),
);