import React, { useContext } from "react";
import AuthContext from "../../../Context/AuthProvider";

function StudentBoard() {
  const { authUser } = useContext(AuthContext);

  return <div>Welcome {authUser?.user.firstName}</div>;
}

export default StudentBoard;
