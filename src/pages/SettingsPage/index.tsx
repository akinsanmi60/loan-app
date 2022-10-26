/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastOptions from "hooks/toast";
import AuthContext from "Context/AuthProvider";
import { useMutation } from "react-query";
import { patchRequest } from "utils/apiCall";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UPDATE_USER } from "utils/Api-Routes";
import FormField from "common/FormField";
import { Input, Spinner, useDisclosure } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import SettingWrapper, { ButtonStyled, inputStyles } from "./style";
import ChangePasswordModal from "./component";
import { ErrorProp } from "./type";

interface FormInputs {
  phoneNumber: string;
  nationality: string;
  country: string;
  state: string;
  moveIn: string;
  address: string;
}

const schema = yup
  .object({
    phoneNumber: yup.string().required(),
    nationality: yup.string().required(),
    country: yup.string().required(),
    state: yup.string().required(),
    moveIn: yup.string().required(),
    address: yup.string().required(),
  })
  .required();
function SettingsPage() {
  const { authUser } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const _id = authUser?.user._id;

  const lastname = authUser?.user.lastName;
  const firstname = authUser?.user.firstName;
  const email = authUser?.user.email;
  const acct = authUser?.user.accountType;

  const { isLoading, mutate } = useMutation(patchRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
    },
    onError(err: ErrorProp) {
      toast.error(err?.message, toastOptions);
    },
  });
  const forSubmit = (valueInput: any) => {
    const payload = {
      ...valueInput,
      _id,
    };

    mutate({ data: payload, url: UPDATE_USER });
  };

  return (
    <SettingWrapper>
      <div className="setbox">
        <form onSubmit={handleSubmit(forSubmit)}>
          <div className="box">
            <div className="img-box">
              <div>
                <FaUserCircle className="img" />
              </div>
            </div>
            <div className="details">
              <div className="userdetails">
                <div className="labelinput">
                  <FormField label="First name">
                    <Input
                      defaultValue={firstname}
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
                      defaultValue={lastname}
                      focusBorderColor="none"
                      sx={inputStyles}
                      type="text"
                      readOnly
                    />
                  </FormField>
                </div>
                <div className="labelinput">
                  <FormField label="Account Type">
                    <Input
                      defaultValue={acct}
                      focusBorderColor="none"
                      sx={inputStyles}
                      type="text"
                      readOnly
                    />
                  </FormField>
                </div>

                <div className="labelinput">
                  <FormField label="Email">
                    <Input
                      defaultValue={email}
                      focusBorderColor="none"
                      sx={inputStyles}
                      type="text"
                    />
                  </FormField>
                </div>
                <div className="passbtn">
                  <button
                    type="button"
                    onClick={() => {
                      onOpen();
                    }}
                  >
                    Change Password
                  </button>
                </div>
              </div>
              <div className="countrydetails">
                <div className="labelinput">
                  <FormField label="Phone Number">
                    <Input
                      {...register("phoneNumber")}
                      focusBorderColor="none"
                      sx={inputStyles}
                      type="text"
                    />
                  </FormField>
                </div>
                <div className="labelinput">
                  <FormField label="Nationality">
                    <Input
                      {...register("nationality")}
                      focusBorderColor="none"
                      sx={inputStyles}
                      type="text"
                    />
                  </FormField>
                </div>

                <div className="labelinput">
                  <FormField label="Country of Residence">
                    <Input
                      {...register("country")}
                      focusBorderColor="none"
                      sx={inputStyles}
                      type="text"
                    />
                  </FormField>
                </div>
                <div className="labelinput">
                  <FormField label="State of Residence">
                    <Input
                      {...register("state")}
                      focusBorderColor="none"
                      sx={inputStyles}
                      type="text"
                    />
                  </FormField>
                </div>
                <div className="labelinput">
                  <FormField label="Move in Date">
                    <Input
                      {...register("moveIn")}
                      focusBorderColor="none"
                      sx={inputStyles}
                      type="text"
                    />
                  </FormField>
                </div>
              </div>
            </div>
            <div className="box-address">
              <div className="labelinput">
                <FormField label="Address">
                  <Input
                    {...register("address")}
                    className="address"
                    sx={inputStyles}
                    type="text"
                  />
                </FormField>
              </div>
            </div>
          </div>
          <div className="agreementbtn">
            <ButtonStyled type="submit">
              {isLoading ? <Spinner size="sm" /> : "Save"}
            </ButtonStyled>
          </div>
        </form>
      </div>
      <ChangePasswordModal onClose={onClose} isOpen={isOpen} />
    </SettingWrapper>
  );
}

export default SettingsPage;
