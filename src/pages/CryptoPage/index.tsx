import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      index
      <Link to="/cryptohome"> page</Link>
    </div>
  );
}

export default index;
