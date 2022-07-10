import { useContext } from "react";
import axios from "axios";
import AuthContext from "Context/AuthProvider";

function RefreshToken() {
  const { setAuthUser, authUser } = useContext(AuthContext);

  const refresh = async () => {
    const res = await axios.get(
      "http://localhost:5500/auth/user/refreshToken",
      {
        withCredentials: true,
      },
    );
    console.log("<<<<<>>>>>", res.data);
    console.log("<<<<<>>>>>", res.data.token);
    setAuthUser({ ...authUser!, token: res.data.token });
    // the reason for this return is to call it again when it fails initially
    return res.data.token;
  };

  return refresh;
}

export default RefreshToken;
