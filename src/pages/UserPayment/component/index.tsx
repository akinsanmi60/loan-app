/* eslint-disable no-undef */
import React, { useContext, useState } from "react";
import PaystackPop from "@paystack/inline-js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastOptions from "hooks/toast";
import AuthContext from "Context/AuthProvider";
import FormField from "common/FormField";
import { Input } from "@chakra-ui/react";
import { inputStyles } from "pages/Contact/style";
import { ButtonStyled, WrapperAll } from "./styled";

function PaystackIntegration() {
  const { authUser } = useContext(AuthContext);

  const lastname = authUser?.user.lastName;
  const firstname = authUser?.user.firstName;
  const email = authUser?.user.email;

  const [amount, setAmount] = useState("5000");

  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_fa5805e84c03c63dbe51460e8b6add4fca372aa6",
      amount: (amount as any) * 100,
      lastname,
      firstname,
      email,
      onSuccess(transaction: { reference: any }) {
        toast.success(
          `Payment Complete! Reference to ${transaction.reference}`,
          toastOptions,
        );
      },
      onCancel() {
        toast.error("Transaction Cancel", toastOptions);
      },
    });
  };

  return (
    <WrapperAll>
      <div>
        <form onSubmit={submitForm}>
          <div className="labelinput">
            <FormField label="First name">
              <Input
                value={firstname}
                focusBorderColor="none"
                sx={inputStyles}
                type="text"
                readOnly
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Last name">
              <Input
                value={lastname}
                focusBorderColor="none"
                sx={inputStyles}
                type="text"
                readOnly
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Last name">
              <Input
                value={email}
                focusBorderColor="none"
                sx={inputStyles}
                type="text"
                readOnly
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Last name">
              <Input
                value={amount}
                focusBorderColor="none"
                sx={inputStyles}
                type="text"
                onChange={e => setAmount(e.target.value)}
              />
            </FormField>
          </div>
          <div className="agreementbtn">
            <ButtonStyled type="submit">Pay</ButtonStyled>
          </div>
        </form>
      </div>
      <ToastContainer />
    </WrapperAll>
  );
}

export default PaystackIntegration;
