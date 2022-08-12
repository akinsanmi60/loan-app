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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import toastOptions from "hooks/toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { STUDENT_REGISTER } from "utils/Api-Routes";
import { postRequest } from "utils/apiCall";
import FormField from "../../../common/FormField";
import Container, { FormContainer, ContainerForm, Box } from "../style";
import AuthContext from "../../../Context/AuthProvider";
import { ErrorProp } from "./type";

interface RegisterFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  accountType: string;
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(5).max(20).required(),
    accountType: yup.string().default("student"),
  })
  .required();

function RegisterForm() {
  const { setAuthUser } = useContext(AuthContext);
  const [pshow, setPshow] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });

  // to view password
  const handleClickP = () => setPshow(!pshow);
  const handleClick = () => setShow(!show);

  // handle register function
  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
      const user = res?.user;
      setAuthUser({ user });
      navigate("/verificationpage");
    },
    onError(err: ErrorProp) {
      toast.error(err?.message, toastOptions);
    },
  });

  const onSubmit = (valueInput: any) => {
    if (valueInput.password !== valueInput.confirmPassword) {
      return toast.error("passwords do not match", toastOptions);
    }
    return mutate({ data: valueInput, url: STUDENT_REGISTER });
  };

  return (
    <FormContainer>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <FormField label="Account Type">
            <Input
              {...register("accountType")}
              type="text"
              defaultValue="student"
              disabled
            />
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
        <div className="form">
          <FormField label="Confirm Password">
            <InputGroup>
              <Input
                {...register("confirmPassword")}
                type={show ? "text" : "password"}
              />
              <InputRightElement>
                <p className="btn-icon" onClick={handleClick}>
                  {show ? (
                    <ViewIcon color=" #16194F" />
                  ) : (
                    <ViewOffIcon color=" #16194F" />
                  )}
                </p>
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
          <button type="submit" className="green_btn">
            {isLoading ? <Spinner size="sm" /> : "Register"}
          </button>
        </div>
        <div className="text">
          <Text color="black" alignSelf="flex-start" fontSize={13}>
            Already have an account?{" "}
            <Link to="/studentlogin">
              <Text
                color="txt.primary"
                fontWeight="700"
                as="button"
                padding={3}
              >
                Log in
              </Text>
            </Link>
          </Text>
        </div>
      </form>
    </FormContainer>
  );
}

function StudentRegister() {
  return (
    <div>
      <Container>
        <Box>
          <ContainerForm>
            <div className="left">
              <h1>Welcome Back</h1>
              <Link to="/studentlogin">
                <button type="button" className="white_btn">
                  Login
                </button>
              </Link>
            </div>
            <div className="right">
              <RegisterForm />
            </div>
          </ContainerForm>
        </Box>
      </Container>
    </div>
  );
}

export default StudentRegister;
