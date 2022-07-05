/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Input, Text } from "@chakra-ui/react";
import { CircularProgress } from "@mui/material";
import { ToastContainer, toast, ToastPosition, Theme } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyImg from "../../../assets/authentication.svg";
import Container, { ContainerForm, FormContainer } from "../style";
import AuthContext from "../../../Context/AuthProvider";

const styles = {
  logo: {
    width: "60%",
    marginBottom: "20px",
  },
};

type ToastProp = {
  position: ToastPosition | undefined;
  autoClose: number;
  pauseOnHover: boolean;
  draggable: boolean;
  theme: Theme | undefined;
};
function VerificationForm() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({ code: "" });
  const navigate = useNavigate();
  const { authUser } = useContext(AuthContext);

  const toastOptions: ToastProp = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: false,
    draggable: true,
    theme: "light",
  };

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5500/auth/user/verify",
        value,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );

      if (res?.data.status === true) {
        toast.success(res?.data.message, toastOptions);
      } else {
        toast.error(res?.data.message, toastOptions);
      }
      navigate("/studentlogin");
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <FormContainer>
      <img src={VerifyImg} alt="" style={styles.logo} />
      <h2>Please verify your account</h2>
      <p className="comp-text">
        Your account has been created successfully. To complete your process, we
        have sent code to your email: <b>{authUser?.user.email}</b>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="input-con">
            <Input
              type="number"
              name="code"
              className="ver-input"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="btn">
          <Button type="submit" className="green_btn">
            {loading ? <CircularProgress size="22px" /> : "Verify"}
          </Button>
        </div>

        <div className="action-text">
          <Text color="black" alignSelf="flex-start" fontSize={13}>
            It may take a minute to receive your code. Haven't received it?{" "}
            <span>Resend a new code.</span>
          </Text>
        </div>
      </form>
    </FormContainer>
  );
}

function Verification() {
  const { authUser } = useContext(AuthContext);
  console.log(authUser, "kkkkkkkkkkk");
  return (
    <Container>
      <ContainerForm>
        <div className="ver-left">
          <div className="var-text">
            <h3>Welcome</h3>
            <h3>to</h3>
            <h3>Humoni</h3>
            {authUser?.user.accountType === "business" ? (
              <p className="welname"> {authUser?.user.businessName}</p>
            ) : authUser?.user.accountType === "student" ? (
              <p className="welname">{`${authUser?.user.firstName}  ${authUser?.user.lastName}`}</p>
            ) : null}
          </div>
        </div>
        <div className="ver-right">
          <VerificationForm />
        </div>
      </ContainerForm>
    </Container>
  );
}

export default Verification;
