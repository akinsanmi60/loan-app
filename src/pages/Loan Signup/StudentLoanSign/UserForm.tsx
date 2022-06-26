/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Review from "./component/Review/Review";
import UserDetails from "./component/pageone/UserDetails";
import Confirm from "./component/Credentials/Confirm";
import formValue from "./type";
import EductionBio from "./component/pagetwo/Education";
import FinancePage from "./component/pagethree/finance";
import FormWrapper from "./style";

const StudentLoanForm = () => {
  // Steps
  const [activeStep, setActiveStep] = useState(0);

  const getSteps = () => {
    return ["User Details", "Biography", "Review", "Confirm"];
  };

  const steps = getSteps();

  // State variables
  const [multiFormValues, setMultiFormValues] = useState(formValue);

  // Navigates to the next page
  const handleNext = () => {
    setActiveStep(nextStep => nextStep + 1);
  };
  // Navigates to the Previous page
  const handleBack = () => {
    setActiveStep(previousStep => previousStep - 1);
  };

  // Handle form value state on change
  const handleChange = (input: any) => (e: { target: { value: any } }) => {
    setMultiFormValues({ ...multiFormValues, [input]: e.target.value });
  };
  return (
    <FormWrapper>
      {activeStep === 0 && (
        <UserDetails values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 1 && (
        <EductionBio values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 2 && (
        <FinancePage values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 3 && <Review values={multiFormValues} />}
      {activeStep === 4 && <Confirm />}

      <div className="container">
        <div className="btncase">
          <Button
            hidden={activeStep === 0}
            className="btn-back"
            onClick={handleBack}
            style={activeStep === 4 ? { display: "none" } : {}}
          >
            Back
          </Button>

          <Button
            className="btn-next"
            onClick={handleNext}
            style={activeStep === 4 ? { display: "none" } : {}}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </FormWrapper>
  );
};

export default StudentLoanForm;
