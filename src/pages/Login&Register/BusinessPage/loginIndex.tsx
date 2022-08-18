import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext, { pushToLocalStorage } from "Context/AuthProvider";
import {
  Spinner,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import toastOptions from "hooks/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaBuilding } from "react-icons/fa";
import { BUSINESS_LOGIN } from "utils/Api-Routes";
import { postRequest } from "utils/apiCall";
import { useMutation } from "react-query";
import FormField from "common/FormField";
import Container, { ContainerForm, FormContainer, Box } from "../style";
import { ErrorProp } from "./type";
import ResetPasswordModal from "../ForgotPassword";

interface LoginFormInputs {
  businessName: string;
  password: string;
}

const schema = yup
  .object({
    businessName: yup.string().required(),
    password: yup.string().min(5).max(20).required(),
  })
  .required();

function OverlayTwo() {
  return (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
      // bg="none"
      // backdropFilter="auto"
      // backdropInvert="80%"
      // backdropBlur="2px"
    />
  );
}

function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo />);
  const { setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [pshow, setPshow] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  // to view password
  const handleClickP = () => setPshow(!pshow);

  // handlelogin
  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
      const token = res?.token;
      const user = res?.user;
      setAuthUser({ token, user });
      pushToLocalStorage(token, user);
      const { isEmailVerified } = user;
      if (isEmailVerified === true) {
        navigate("/auth/businessdashboard");
      } else {
        navigate("/verificationpage");
      }
    },
    onError(err: ErrorProp) {
      toast.error(err?.message, toastOptions);
    },
  });

  const onSubmit = (valueInput: any) => {
    mutate({ data: valueInput, url: BUSINESS_LOGIN });
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <div className="icon">
            <FaBuilding className="iconstyle" />
          </div>
          <h1 className="hero">Login to Your Account</h1>
          <FormField label="Business Name">
            <Input {...register("businessName")} type="text" required />
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
                <p className="btn-icon" onClick={handleClickP}>
                  {pshow ? (
                    <ViewIcon color=" #16194F" />
                  ) : (
                    <ViewOffIcon color=" #16194F" />
                  )}
                </p>
              </InputRightElement>
            </InputGroup>
          </FormField>
        </div>
        <Text color="txt.muted" alignSelf="flex-start" fontSize={12}>
          Forget password?{" "}
          <Text
            as="a"
            textDecoration="underline"
            cursor="pointer"
            onClick={() => {
              setOverlay(<OverlayTwo />);
              onOpen();
            }}
          >
            Click to reset password
          </Text>
        </Text>
        <div className="btn">
          <button type="submit" className="green_btn">
            {isLoading ? <Spinner size="sm" /> : "Login"}
          </button>
        </div>
        <div className="text">
          <Text color="black" alignSelf="flex-start" fontSize={13}>
            Don't have an account?{" "}
            <Link to="/businessregister">
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
      <ResetPasswordModal onClose={onClose} isOpen={isOpen} overlay={overlay} />
    </FormContainer>
  );
}

function login() {
  return (
    <Container>
      <ToastContainer />
      <Box>
        <ContainerForm>
          <div className="rom">
            <LoginForm />
          </div>
          <div className="ram">
            <h1>New Here ?</h1>
            <Link to="/businessregister">
              <button type="button" className="white_btn">
                Register
              </button>
            </Link>
          </div>
        </ContainerForm>
      </Box>
    </Container>
  );
}

export default login;
