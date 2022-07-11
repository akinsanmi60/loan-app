/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react-hooks/exhaustive-deps */
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

export const pushToLocalStorage = (token: string, user: any) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
  // const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user") as string;

  return { userString };
};

const { userString } = getUser();
const user = JSON.parse(userString);

export function AuthProvider({ children }: ProviderProps) {
  const [authUser, setAuthUser] = useState<AuthUserType | null>({ user });

  console.log("<<+++++++++>>>>>", authUser);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
