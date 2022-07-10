/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
import AuthContext from "Context/AuthProvider";
import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

enum Account {
  Student = "student",
  Admin = "admin",
  Business = "business",
}

function PrivateRoute({ accounts }: { accounts: Array<Account | string> }) {
  const { authUser } = useContext(AuthContext);
  const location = useLocation();

  console.log("<<<<<<<<<<<>>>>>>>", authUser);
  const accountType = authUser?.user?.accountType!;

  const userHasRequiredAccount =
    authUser?.user && accounts.includes(accountType);

  // checks on authUser
  if (!authUser?.user) {
    return <Navigate to="/studentlogin" state={{ from: location }} replace />;
  }

  return userHasRequiredAccount ? (
    <Outlet />
  ) : authUser?.user && !userHasRequiredAccount ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/businesslogin" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
