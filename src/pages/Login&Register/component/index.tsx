/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import { CircularProgress } from "@mui/material";
import VerifyImg from "../../../assets/authentication.svg";
import Container, { ContainerForm, FormContainer } from "../style";

const styles = {
  logo: {
    width: "60%",
    marginBottom: "20px",
  },
};

function VerificationForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    setLoading(true);
    console.log(e);
  };

  return (
    <FormContainer>
      <img src={VerifyImg} alt="" style={styles.logo} />
      <h2>Please verify your account</h2>
      <p className="comp-text">
        Your account has been created successfully. To complete your process, we
        have sent code to your email:
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div>
            <Input
              className="ver-input"
              //   {...register("password")}
            />
          </div>
        </div>
        <div className="btn">
          <Button type="submit" className="green_btn">
            {loading ? <CircularProgress /> : "Verify"}
          </Button>
        </div>
      </form>
    </FormContainer>
  );
}

function Verification() {
  return (
    <Container>
      <ContainerForm>
        <div className="ver-left">Verification</div>
        <div className="ver-right">
          <VerificationForm />
        </div>
      </ContainerForm>
    </Container>
  );
}

export default Verification;
