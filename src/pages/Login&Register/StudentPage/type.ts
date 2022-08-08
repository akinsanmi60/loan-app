import * as yup from "yup";

export type LoginFormInputs = {
  email: string;
  password: string;
};

export interface RegisterFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  accountType: string;
  password: string;
  confirmPassword: string;
}

export const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(5).max(20).required(),
    accountType: yup.string().default("student"),
  })
  .required();

export interface ErrorProp {
  message: string;
  success: boolean;
}
