/* eslint-disable react/jsx-filename-extension */
import { createContext, useMemo, useState } from "react";

type AuthUserType = {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    businessName: string;
  };
  token: string;
};

type ContextType = {
  authUser: AuthUserType | null;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUserType | null>>;
};

type ProviderProps = {
  children: React.ReactNode;
};
const AuthContext = createContext({} as ContextType);

export function AuthProvider({ children }: ProviderProps) {
  const [authUser, setAuthUser] = useState<AuthUserType | null>(null);

  const value = useMemo(
    () => ({ authUser, setAuthUser }),
    [authUser, setAuthUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
