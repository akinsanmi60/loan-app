/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, ToastPosition, Theme } from "react-toastify";
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
import Container, { FormContainer, ContainerForm } from "../style";

interface RegisterFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
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
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(5).max(20).required(),
  })
  .required();

function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [pshow, setPshow] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<RegisterFormInputs>({
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
  const handleClick = () => setShow(!show);

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
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form">
          <FormField label="First Name">
            <Input {...register("firstName")} type="text" required />
          </FormField>
        </div>
        <div className="form">
          <FormField label="Last Name">
            <Input {...register("lastName")} type="text" required />
          </FormField>
        </div>
        <div className="form">
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
        <div className="form">
          <FormField label="Confirm Password">
            <InputGroup>
              <Input
                {...register("confirmPassword")}
                type={show ? "text" : "password"}
              />
              <InputRightElement>
                <Button className="btn-icon" onClick={handleClick}>
                  {show ? (
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
          By clicking 'register' it means you agree with our{" "}
          <Text as="a" textDecoration="underline" cursor="pointer">
            terms and conditions
          </Text>
        </Text>
        <div className="btn">
          <Button type="submit" className="green_btn">
            {loading ? <CircularProgress /> : "Register"}
          </Button>
        </div>
        <div className="text">
          <Text color="black" alignSelf="flex-start" fontSize={13}>
            Already have an account?{" "}
            <Link to="/login">
              <Text color="txt.primary" fontWeight="700" as="button">
                Log in
              </Text>
            </Link>
          </Text>
        </div>
      </form>
    </FormContainer>
  );
}

function Register() {
  return (
    <>
      <Container>
        <ContainerForm>
          <div className="left">
            <h1>Welcome Back</h1>
            <Link to="/login">
              <button type="button" className="white_btn">
                Login
              </button>
            </Link>
          </div>
          <div className="right">
            <RegisterForm />
          </div>
        </ContainerForm>
      </Container>
      <ToastContainer />
    </>
  );
}

export default Register;
