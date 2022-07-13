import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";

function BusinessBoard() {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setAuthUser(null);
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      Welcome {authUser?.user.businessName} to business
      <button type="submit" onClick={logout}>
        logout
      </button>
    </div>
  );
}

export default BusinessBoard;
