import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
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
import toastOptions from "hooks/toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaUserGraduate } from "react-icons/fa";
import FormField from "../../../common/FormField";
import Container, { ContainerForm, FormContainer, Box } from "../style";
import AuthContext, { pushToLocalStorage } from "../../../Context/AuthProvider";

interface LoginFormInputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(5).max(20).required(),
  })
  .required();

function LoginForm() {
  const { setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [pshow, setPshow] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  // to view password
  const handleClickP = () => setPshow(!pshow);

  // handle login function
  const submitForm = async (values: any) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5500/auth/student/login",
        values,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      if (res?.data?.success === true) {
        toast.success(res?.data?.message, toastOptions);
        console.log("<<<<<<<<<<>>>>>>>>>>>>>", res?.data?.message);
        const token = res?.data?.token;
        const user = res?.data?.user;
        setAuthUser({ token, user });
        pushToLocalStorage(token, user);
        navigate("/layout/studentdashboard");
        window.location.reload();
      } else {
        toast.error(res?.data?.message, toastOptions);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form">
          <div className="icon">
            <FaUserGraduate className="iconstyle" />
          </div>
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
            {loading ? <CircularProgress size="22px" /> : "Login"}
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
      <ToastContainer />
    </FormContainer>
  );
}

function login() {
  return (
    <>
      <Container>
        <Box>
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
        </Box>
      </Container>
      <ToastContainer />
    </>
  );
}

export default login;
