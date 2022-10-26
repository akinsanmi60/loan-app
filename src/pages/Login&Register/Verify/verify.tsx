/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Spinner, Input, Text } from "@chakra-ui/react";
import toastOptions from "hooks/toast";
import { toast } from "react-toastify";
import { VERIFY_EMAIL } from "utils/Api-Routes";
import VerifyImg from "../../../assets/authentication.svg";
import Container, { Box, ContainerForm, FormContainer } from "../style";
import AuthContext from "../../../Context/AuthProvider";

const styles = {
  logo: {
    width: "60%",
    marginBottom: "20px",
  },
};

function VerificationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({ code: "" });
  const navigate = useNavigate();
  const { authUser } = useContext(AuthContext);

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const checkLength = () => {
    if (value?.code.length === 0) {
      return toast.error("Enter the six digits code", toastOptions);
    }
    if (value?.code.length < 6) {
      return toast.error("You entered less than six digits code", toastOptions);
    }
    if (value?.code.length > 6) {
      return toast.error("You entered more than six digits code", toastOptions);
    }
    return null;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      checkLength();
      const res = await axios.post(VERIFY_EMAIL, value, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      toast.success(`${res?.data.message}`, toastOptions);

      if (authUser?.user?.accountType === "student") {
        navigate("/studentlogin");
      } else if (authUser?.user?.accountType === "business") {
        navigate("/businesslogin");
      }
      window.location.reload();
    } catch (err: any) {
      console.log(err);
    }
    setIsLoading(false);
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
          <button type="submit" className="green_btn">
            {isLoading ? <Spinner size="sm" /> : "Verify"}
          </button>
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
  return (
    <Container>
      <Box>
        <ContainerForm>
          <div className="ver-left">
            <div className="var-text">
              <h3>Welcome</h3>
              <h3>to</h3>
              <h3>ACE</h3>
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
      </Box>
    </Container>
  );
}

export default Verification;
