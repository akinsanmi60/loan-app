import React, { useContext } from "react";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import toastOptions from "hooks/toast";
import AuthContext from "Context/AuthProvider";
import FormField from "common/FormField";
import { Input } from "@chakra-ui/react";
import SettingWrapper, { ButtonStyled, inputStyles } from "./style";

function SettingsPage() {
  const { authUser } = useContext(AuthContext);
  const lastname = authUser?.user.lastName;
  const firstname = authUser?.user.firstName;
  const acct = authUser?.user.accountType;
  return (
    <SettingWrapper>
      <form>
        <div className="box">
          <div className="details">
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
                  value={acct}
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
                  value=""
                  focusBorderColor="none"
                  sx={inputStyles}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Phone Number">
                <Input
                  value=""
                  focusBorderColor="none"
                  sx={inputStyles}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Nationality">
                <Input
                  value=""
                  focusBorderColor="none"
                  sx={inputStyles}
                  type="text"
                />
              </FormField>
            </div>
            <div className="passbtn">
              <span>Password:</span>
              <button type="button">Change Password</button>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="labelinput">
            <FormField label="Address">
              <Input
                value=""
                focusBorderColor="none"
                sx={inputStyles}
                type="text"
              />
            </FormField>
          </div>
        </div>
        <div className="agreementbtn">
          <ButtonStyled type="submit">Save Changes</ButtonStyled>
        </div>
      </form>
    </SettingWrapper>
  );
}

export default SettingsPage;
