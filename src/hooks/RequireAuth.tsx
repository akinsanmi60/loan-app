/* eslint-disable no-nested-ternary */
import { useContext } from "react";
import AuthContext from "Context/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router";

// type ProtectedRouteType = {
//   roleRequired?: "Student" | "Business";
// };

function ProtectedRoute() {
  const { authUser } = useContext(AuthContext);
  const location = useLocation();

  if (!authUser) {
    return <Navigate to="/unauthorized" state={{ from: location }} />;
  }

  if (!authUser?.user) {
    return <Navigate to="/studentlogin" state={{ from: location }} />;
  }

  const account = authUser.user.accountType;

  switch (account) {
    case "student":
      return <Navigate to="/studentlogin" />; // go to student component
    case "business":
      return <Navigate to="/businesslogin" />; // your business component
    default:
      return <Navigate to="/unauthorized" />;
  }

  // return authUser?.user.accountType ? (
  //   <Outlet />
  // ) : authUser ? (
  //   <Navigate to="/unauthorized" state={{ from: location }} />
  // ) : (
  //   <Navigate to="/studentlogin" />
  // );
}

export default ProtectedRoute;
