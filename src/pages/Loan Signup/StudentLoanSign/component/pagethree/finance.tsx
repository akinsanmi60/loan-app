import React from "react";
import { Input } from "@chakra-ui/react";
import { ProFin } from "./type";

import FormField from "../../../../../common/FormField";
import FinWrapper from "./style";

function FinancePage({ values, handleChange }: ProFin) {
  return (
    <FinWrapper>
      <div className="box">
        <div className="finbox">
          <div className="budget">
            <h4>Financials</h4>
            <div className="details">
              <div className="labelinput">
                <FormField label="Tuition fees for your course">
                  <Input
                    defaultValue={values.tuition}
                    onChange={handleChange("tuition")}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Tuition fees already paid">
                  <Input
                    defaultValue={values.paidTuition}
                    onChange={handleChange("paidTuition")}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Total tuition">
                  <Input
                    defaultValue={values.totalTuition}
                    onChange={handleChange("totalTuition")}
                    type="email"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Books / Study material">
                  <Input
                    defaultValue={values.studyMat}
                    onChange={handleChange("studyMat")}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Rents / Utilities">
                  <Input
                    defaultValue={values.utilities}
                    onChange={handleChange("utilities")}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Transportation">
                  <Input
                    defaultValue={values.trans}
                    onChange={handleChange("trans")}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Other">
                  <Input
                    defaultValue={values.other}
                    onChange={handleChange("other")}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Total living expenses">
                  <Input
                    defaultValue={values.totalExp}
                    onChange={handleChange("totalExp")}
                    type="text"
                  />
                </FormField>
              </div>
            </div>
          </div>
          <div className="otherfund">
            <div className="labelinput">
              <FormField label="Own funds / Family contributions">
                <Input
                  defaultValue={values.ownFund}
                  onChange={handleChange("ownFund")}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Scholarships">
                <Input
                  defaultValue={values.scholarship}
                  onChange={handleChange("scholarship")}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Government Masters/Doctoral loans">
                <Input
                  defaultValue={values.govt}
                  onChange={handleChange("govt")}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Other loans towards this course">
                <Input
                  defaultValue={values.otherloans}
                  onChange={handleChange("otherloans")}
                  type="text"
                />
              </FormField>
            </div>
          </div>
        </div>
        <div className="totalcase">
          <div className="totbudget">
            <p>Total budget needed</p>
            <p>£12,197</p>
          </div>
          <div className="totfunding">
            <p>Total funding</p>
            <p>£12,197</p>
          </div>
        </div>
      </div>
    </FinWrapper>
  );
}

export default FinancePage;
