/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import AuthContext from "../../../Context/AuthProvider";

function index() {
  const { authUser } = useContext(AuthContext);

  return <div>{authUser?.user.firstName}</div>;
}

export default index;
