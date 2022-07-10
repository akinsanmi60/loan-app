/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import { createContext, useState } from "react";

type AuthUserType = {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    businessName: string;
    accountType: string;
  };
  token?: string;
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
  const [authUser, setAuthUser] = useState(() => {
    return JSON.parse(localStorage.getItem("getUserAvail")!);
  });

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
