/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast, ToastPosition, Theme } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormField from "../../../common/FormField";
import SignupContainer, { FormContainer, SignupContainerForm } from "./style";

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
  const [view, setView] = useState("register");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });

  const toastOptions: ToastProp = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: false,
    draggable: true,
    theme: "light",
  };

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
          {!errors.firstName ? (
            ""
          ) : (
            <p className="error_msg">{errors.firstName.message}</p>
          )}
          <FormField label="First Name">
            <Input {...register("firstName")} type="text" />
          </FormField>
        </div>
        <div className="form">
          {!errors.lastName ? (
            ""
          ) : (
            <p className="error_msg">{errors.lastName.message}</p>
          )}
          <FormField label="Last Name">
            <Input {...register("lastName")} type="text" />
          </FormField>
        </div>
        <div className="form">
          {!errors.email ? (
            ""
          ) : (
            <p className="error_msg">{errors.email.message}</p>
          )}
          <FormField label="Email">
            <Input {...register("email")} type="email" />
          </FormField>
        </div>
        <div className="form">
          {!errors.password ? (
            ""
          ) : (
            <p className="error_msg">Password required</p>
          )}
          <FormField label="Password">
            <Input {...register("password")} type="password" />
          </FormField>
        </div>
        <div className="form">
          <FormField label="Confirm Password">
            <Input {...register("confirmPassword")} type="password" />
          </FormField>
        </div>
        <Text color="txt.muted" alignSelf="flex-start">
          By clicking 'sign up' it means you agree with our{" "}
          <Text as="a" textDecoration="underline" cursor="pointer">
            terms and conditions
          </Text>
        </Text>
        <div className="form">
          <Button type="submit" isLoading={loading}>
            Register
          </Button>
        </div>
      </form>
    </FormContainer>
  );
}

function Register() {
  return (
    <>
      <SignupContainer>
        <SignupContainerForm>
          <div className="left">
            <h1>Welcome Back</h1>
            <Link to="/login">
              <button type="button" className="white_btn">
                Sing in
              </button>
            </Link>
          </div>
          <div className="right">
            <RegisterForm />
          </div>
        </SignupContainerForm>
      </SignupContainer>
      <ToastContainer />
    </>
  );
}

export default Register;
