import React from "react";
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import toastOptions from "hooks/toast";
import { useMutation } from "react-query";
import { patchRequest } from "utils/apiCall";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CHANGE_PASSWORD } from "utils/Api-Routes";
import FormField from "common/FormField";
import { ModalWrapper } from "pages/Login&Register/style";
import { ErrorProp } from "pages/Login&Register/StudentPage/type";

type ChangeProps = {
  isOpen: boolean;
  onClose: () => void;
  _id: string | undefined;
};
interface PasswordFormInputs {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    oldPassword: yup.string().min(5).max(20).required(),
    newPassword: yup.string().min(5).max(20).required(),
  })
  .required();

function ChangePasswordModal({ isOpen, onClose, _id }: ChangeProps) {
  const { register, handleSubmit } = useForm<PasswordFormInputs>({
    resolver: yupResolver(schema),
  });
  console.log(_id);

  const { isLoading, mutate } = useMutation(patchRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
    },
    onError(err: ErrorProp) {
      toast.error(err?.message, toastOptions);
    },
  });
  // eslint-disable-next-line consistent-return
  const passwordSubmit = (valueInput: any) => {
    const payload = {
      ...valueInput,
      _id,
    };
    if (valueInput.newPassword !== valueInput.confirmPassword) {
      return toast.error("passwords do not match", toastOptions);
    }
    mutate({ data: payload, url: CHANGE_PASSWORD });
    onClose();
  };

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      size="md"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <ModalWrapper>
            <h1 style={{ marginBottom: 10 }}>Change Password?</h1>
            <form onSubmit={handleSubmit(passwordSubmit)}>
              <div style={{ marginBottom: 40 }}>
                <FormField label="Old Password">
                  <Input
                    {...register("oldPassword")}
                    type="text"
                    required
                    outline="none"
                  />
                </FormField>
              </div>
              <div className="inputbox">
                <FormField label="New Password">
                  <Input
                    {...register("newPassword")}
                    type="text"
                    required
                    outline="none"
                    style={{ marginBottom: 12 }}
                  />
                </FormField>
              </div>
              <div className="inputbox">
                <FormField label="Confirm Password">
                  <Input
                    {...register("confirmPassword")}
                    type="text"
                    required
                    outline="none"
                  />
                </FormField>
              </div>

              <div className="btn">
                <button type="submit" className="reset_btn">
                  {isLoading ? <Spinner size="sm" /> : "Send"}
                </button>
              </div>
            </form>
          </ModalWrapper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ChangePasswordModal;
