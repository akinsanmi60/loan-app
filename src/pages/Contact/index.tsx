import React from "react";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";
import { Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ContactWrapper, {
  ButtonStyled,
  ImgWrapper,
  InnerLayout,
  TextArea,
} from "./style";
import FormField from "../../common/FormField";

type FormData = {
  email: string;
  phone: string;
  name: string;
  subject: string;
  comment: string;
};

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const schema = yup
  .object({
    email: yup
      .string()
      .matches(EMAIL_REGEX, "Please enter a valid email address")
      .required(),
    phone: yup.string().required(),
    name: yup.string().required(),
    subject: yup.string().required(),
    comment: yup.string().required(),
  })
  .required();

function Contact() {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const submit = async (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className="wallpaper">
        <ImgWrapper>heloo</ImgWrapper>
      </div>
      <InnerLayout>
        <ContactWrapper>
          <div>
            <div className="faq">
              <div className="faqtitle">
                <h1>How Can We Help?</h1>
                <p>
                  Please search our extensive range of FAQ topics for answers.
                  If you still can’t find the answer, please fill out the form
                  below.
                </p>
              </div>
              <div className="btn">
                <Box textAlign="center" marginTop={2}>
                  <ButtonStyled onClick={() => navigate("/question")}>
                    Read FAQs
                  </ButtonStyled>
                </Box>
              </div>
            </div>

            <div className="box">
              <form onSubmit={handleSubmit(submit)}>
                <div className="labelinput">
                  <FormField label="Name">
                    <Input {...register("name")} type="text" />
                  </FormField>
                </div>
                <div className="labelinput">
                  <FormField label="Email">
                    <Input
                      {...register("email")}
                      // {...(errors.email && "Email is required")}
                      type="email"
                    />
                  </FormField>
                </div>
                <div className="labelinput">
                  <FormField label="Phone">
                    <Input {...register("phone")} type="text" />
                  </FormField>
                </div>
                <div className="labelinput">
                  <FormField label="Subject">
                    <Input {...register("subject")} type="text" />
                  </FormField>
                </div>
                <div className="labelinput">
                  <FormField label="Comment/ detailed question">
                    <TextArea {...register("comment")} />
                  </FormField>
                </div>
                <div>
                  <ButtonStyled type="submit">Submit</ButtonStyled>
                </div>
              </form>
              <div className="condetail">
                <div className="phone">
                  <p>You can reach us by phone during business hours at:</p>
                  <p>+234813759225</p>
                  <p>Or mail us on</p>
                  <p>hello@humoni.com</p>
                </div>
              </div>
            </div>

            <div className="feed">
              <div className="feedtitle">
                <h1>We love to hear your feedback!</h1>
              </div>
              <div className="feedbtn">
                <ButtonStyled>Share!</ButtonStyled>
              </div>
            </div>
          </div>
        </ContactWrapper>
      </InnerLayout>
    </>
  );
}

export default Contact;
