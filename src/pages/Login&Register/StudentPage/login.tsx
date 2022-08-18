import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import toastOptions from "hooks/toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaUserGraduate } from "react-icons/fa";
import { useMutation } from "react-query";
import { postRequest } from "utils/apiCall";
import { STUDENT_LOGIN } from "utils/Api-Routes";
import FormField from "../../../common/FormField";
import Container, { ContainerForm, FormContainer, Box } from "../style";
import AuthContext, { pushToLocalStorage } from "../../../Context/AuthProvider";
import { ErrorProp } from "./type";
import ResetPasswordModal from "../ForgotPassword";

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

  // handle login function
  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
      const token = res?.token;
      const user = res?.user;
      setAuthUser({ token, user });
      pushToLocalStorage(token, user);
      const { isEmailVerified } = user;
      if (isEmailVerified === true) {
        navigate("/auth/studentdashboard");
      } else {
        navigate("/verificationpage");
      }
    },
    onError(err: ErrorProp) {
      toast.error(err?.message, toastOptions);
    },
  });

  const onSubmit = (valueInput: any) => {
    mutate({ data: valueInput, url: STUDENT_LOGIN });
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          Forget password?
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
      <ResetPasswordModal onClose={onClose} isOpen={isOpen} overlay={overlay} />
    </FormContainer>
  );
}

function login() {
  return (
    <div>
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
    </div>
  );
}

export default login;
