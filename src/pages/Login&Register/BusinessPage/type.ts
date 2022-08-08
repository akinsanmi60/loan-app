import * as yup from "yup";

export interface LoginFormInputs {
  businessName: string;
  password: string;
}

export interface RegisterFormInputs {
  businessName: string;
  ownerName: string;
  email: string;
  accountType: string;
  password: string;
  confirmPassword: string;
}
export const schema = yup
  .object({
    businessName: yup.string().required(),
    ownerName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(5).max(20).required(),
    accountType: yup.string().default("business"),
  })
  .required();

export interface ErrorProp {
  message: string;
  success: boolean;
}
