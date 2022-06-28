import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Theme, toast, ToastContainer, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import CircularProgress from "@mui/material/CircularProgress";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormField from "../../../common/FormField";
import Container, { ContainerForm, FormContainer } from "../style";

interface LoginFormInputs {
  email: string;
  password: string;
}

type ToastProp = {
  position: ToastPosition | undefined;
  autoClose: number;
  pauseOnHover: boolean;
  draggable: boolean;
  theme: Theme | undefined;
};

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(5).max(20).required(),
  })
  .required();

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [pshow, setPshow] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const toastOptions: ToastProp = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: false,
    draggable: true,
    theme: "light",
  };

  // to view password
  const handleClickP = () => setPshow(!pshow);

  const submitForm = (data: any) => {
    console.log("data", data);
    setLoading(true);
    try {
      if (data.password !== data.confirmPassword) {
        toast.error("passwords do not match", toastOptions);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form">
          <h1 className="hero">Login to Your Account</h1>
          <FormField label="Email">
            <Input {...register("email")} type="email" required />
          </FormField>
        </div>
        <div className="form">
          <FormField label="Password">
            <InputGroup>
              <Input
                {...register("password")}
                type={pshow ? "text" : "password"}
              />
              <InputRightElement>
                <Button className="btn-icon" onClick={handleClickP}>
                  {pshow ? (
                    <ViewIcon color=" #16194F" />
                  ) : (
                    <ViewOffIcon color=" #16194F" />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormField>
        </div>
        <Text color="txt.muted" alignSelf="flex-start" fontSize={10}>
          Forget password?
          <Text as="a" textDecoration="underline" cursor="pointer">
            Click to reset password
          </Text>
        </Text>
        <div className="btn">
          <Button type="submit" className="green_btn">
            {loading ? <CircularProgress /> : "Login"}
          </Button>
        </div>
        <div className="text">
          <Text color="black" alignSelf="flex-start" fontSize={13}>
            Don't have an account?{" "}
            <Link to="/studentregister">
              <Text
                color="txt.primary"
                fontWeight="700"
                as="button"
                padding={3}
              >
                Register
              </Text>
            </Link>
          </Text>
        </div>
      </form>
    </FormContainer>
  );
}

function login() {
  return (
    <>
      <Container>
        <ContainerForm>
          <div className="rom">
            <LoginForm />
          </div>
          <div className="ram">
            <h1>New Here ?</h1>
            <Link to="/studentregister">
              <button type="button" className="white_btn">
                Register
              </button>
            </Link>
          </div>
        </ContainerForm>
      </Container>
      <ToastContainer />
    </>
  );
}

export default login;