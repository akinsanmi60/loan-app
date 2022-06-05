import React from "react";
import { Checkbox, Input } from "@chakra-ui/react";
import { ProFin } from "./type";
import FinWrapper from "./style";

function FinancePage({ values, handleChange }: ProFin) {
  return (
    <FinWrapper>
      <div className="box">
        <h1>Financials</h1>
        <div className="finbox">
          <div className="budget">
            <h4>Budget</h4>
            <div className="details">
              <div className="labelinput">
                <p> Tuition fees for your course</p>
                <Input
                  defaultValue={values.tuition}
                  onChange={handleChange("tuition")}
                  type="text"
                />
              </div>
              <div className="labelinput">
                <p>Tuition fees already paid</p>
                <Input
                  defaultValue={values.paidTuition}
                  onChange={handleChange("paidTuition")}
                  type="text"
                />
              </div>
              <div className="labelinput">
                <p>Total tuition</p>
                <Input
                  defaultValue={values.totalTuition}
                  onChange={handleChange("totalTuition")}
                  type="email"
                />
              </div>
              <div className="labelinput">
                <p>Books / Study material</p>
                <Input
                  defaultValue={values.studyMat}
                  onChange={handleChange("studyMat")}
                  type="text"
                />
              </div>
              <div className="labelinput">
                <p>Rents / Utilities</p>
                <Input
                  defaultValue={values.utilities}
                  onChange={handleChange("utilities")}
                  type="text"
                />
              </div>
              <div className="labelinput">
                <p>Transportation</p>
                <Input
                  defaultValue={values.trans}
                  onChange={handleChange("trans")}
                  type="text"
                />
              </div>
              <div className="labelinput">
                <p>Other</p>
                <Input
                  defaultValue={values.other}
                  onChange={handleChange("other")}
                  type="text"
                />
              </div>
              <div className="labelinput">
                <p>Total living expenses</p>
                <Input
                  defaultValue={values.totalExp}
                  onChange={handleChange("totalExp")}
                  type="text"
                />
              </div>
              <div className="totbudget">
                <p>Total budget needed</p>
                <Input disabled />
              </div>
            </div>
          </div>
          <div className="otherfund">
            <h4>Funding from other sources</h4>
            <div className="labelinput">
              <p>Own funds / Family contributions</p>
              <Input
                defaultValue={values.ownFund}
                onChange={handleChange("ownFund")}
                type="text"
              />
            </div>
            <div className="labelinput">
              <p>Scholarships</p>
              <Input
                defaultValue={values.scholarship}
                onChange={handleChange("scholarship")}
                type="text"
              />
            </div>
            <div className="labelinput">
              <p>Government Masters/Doctoral loans</p>
              <Input
                defaultValue={values.govt}
                onChange={handleChange("govt")}
                type="text"
              />
            </div>
            <div className="labelinput">
              <p>Other loans towards this course</p>
              <Input
                defaultValue={values.otherloans}
                onChange={handleChange("otherloans")}
                type="text"
              />
            </div>
            <div className="totalcase">
              <div className="totfunding">
                <p>Total funding</p>
                <Input disabled />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="warning">
        <p>We expect the below figures to match your credit report</p>
      </div>
      <div className="box">
        <h4>Assets / Liabilities in GBP</h4>
        <div className="asslib">
          <div className="labelinput">
            <p>Total Savings</p>
            <Input
              defaultValue={values.totSaving}
              onChange={handleChange("totSaving")}
              type="text"
            />
          </div>
          <div className="labelinput">
            <p>Total Non-Cash Investments/Assets</p>
            <Input
              defaultValue={values.totNonCash}
              onChange={handleChange("totNonCash")}
              type="text"
            />
          </div>
          <div className="labelinput">
            <p>Total Previous Student Loans Outstanding</p>
            <Input
              defaultValue={values.prevLoans}
              onChange={handleChange("prevLoans")}
              type="text"
            />
          </div>
          <div className="labelinput">
            <p>Any other Loans </p>
            <Input
              defaultValue={values.anyLoan}
              onChange={handleChange("anyLoan")}
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="info">
          <div className="infobox">
            <p>
              Have you been declared bankrupt or had any County Court Judgements
              (CCJs) against you or entered into an Individual Voluntary
              Arrangements (IVAs) in the last 6 years?
            </p>
            <div className="check">
              <div>
                <Checkbox
                  className="checkbox"
                  defaultValue={values.totSaving}
                  onChange={handleChange("totSaving")}
                  type="text"
                >
                  Yes
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  className="checkbox"
                  defaultValue={values.totSaving}
                  onChange={handleChange("totSaving")}
                  type="text"
                >
                  No
                </Checkbox>
              </div>
            </div>
            <Checkbox
              defaultValue={values.totSaving}
              onChange={handleChange("totSaving")}
              type="text"
            />
          </div>
        </div>
        <div className="info">
          <div className="infobox">
            <p>
              Have you defaulted on any payments or had any payments in arrears
              in the last 6 years?
            </p>
            <div className="check">
              <div>
                <Checkbox
                  className="checkbox"
                  defaultValue={values.totSaving}
                  onChange={handleChange("totSaving")}
                  type="text"
                >
                  Yes
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  className="checkbox"
                  defaultValue={values.totSaving}
                  onChange={handleChange("totSaving")}
                  type="text"
                >
                  No
                </Checkbox>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <p>Any other information relevant to your application?</p>
          <Input
            defaultValue={values.optionTxt}
            onChange={handleChange("optionTxt")}
            type="text"
            className="optional"
          />
        </div>
      </div>
    </FinWrapper>
  );
}

export default FinancePage;
