/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import AuthContext from "../../../Context/AuthProvider";

function BusinessBoard() {
  const { authUser } = useContext(AuthContext);

  return <div>Welcome {authUser?.user.businessName} to business</div>;
}

export default BusinessBoard;
