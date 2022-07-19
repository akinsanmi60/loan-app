import { Checkbox, Input } from "@chakra-ui/react";
import React from "react";
import FormField from "../../../../../common/FormField";
import { inputBoxStyles, inputStyles } from "../../style";
import PersonalWrapper from "../pageone/style";
import FinWrapper from "../pagethree/style";
import EduWrapper from "../pagetwo/style";
import { ProRew } from "./type";

function Review({ values }: ProRew) {
  return (
    <div>
      <PersonalWrapper>
        <div className="box">
          <h4>Enter your Details</h4>
          <div className="details">
            <div className="labelinput">
              <FormField label="First Name">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.firstName}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Last Name">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.lastName}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Email">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.email}
                  type="email"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Birth Country">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.birthCountry}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Nationality">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.nationality}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Country of Residence">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.residence}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Title">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.title}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Insurance Nos">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.insurance}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Mobile Nos">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.phone}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Birth Date">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.birth}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Marital Status">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.marital}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Nos of Dependants">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.dependant}
                  type="text"
                />
              </FormField>
            </div>
          </div>
        </div>

        <div className="box">
          <h4>Address</h4>
          <div className="address">
            <div className="addinput">
              <FormField label="Current Address">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  className="addput"
                  defaultValue={values.address}
                  type="text"
                />
              </FormField>
            </div>
            <div className="add-details">
              <div className="labelinput">
                <FormField label="Post Code">
                  <Input
                    focusBorderColor="none"
                    sx={inputStyles}
                    disabled
                    defaultValue={values.countryCode}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Land Mark">
                  <Input
                    focusBorderColor="none"
                    sx={inputStyles}
                    disabled
                    defaultValue={values.landMark}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Move in Date">
                  <Input
                    focusBorderColor="none"
                    sx={inputStyles}
                    disabled
                    defaultValue={values.movedate}
                    type="text"
                  />
                </FormField>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <h4>Course Info</h4>
          <div className="course">
            <div className="labelinput">
              <FormField label="Type of Course">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.typeCourse}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Mode of Study">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.study}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="School">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.schoolName}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Degree">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.degree}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Commencement Date">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.completeDate}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Course finishes">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.endDate}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Course Duration">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.courseDuration}
                  type="text"
                />
              </FormField>
            </div>
          </div>
        </div>
      </PersonalWrapper>

      <EduWrapper>
        <div className="box">
          <h4>Education History</h4>
          <p>
            Do you have (or are currently completing) a university degree or
            professional qualification?
          </p>
          <div className="address">
            <div className="addinput">
              <FormField label="Instituion">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  className="addput"
                  defaultValue={values.instName}
                  type="text"
                />
              </FormField>
            </div>
            <div className="add-details">
              <div className="labelinput">
                <FormField label="Completion Date">
                  <Input
                    focusBorderColor="none"
                    sx={inputStyles}
                    disabled
                    defaultValue={values.compDate}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Course Type">
                  <Input
                    focusBorderColor="none"
                    sx={inputStyles}
                    disabled
                    defaultValue={values.courseType}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Course Name">
                  <Input
                    focusBorderColor="none"
                    sx={inputStyles}
                    disabled
                    defaultValue={values.courseName}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Status">
                  <Input
                    focusBorderColor="none"
                    sx={inputStyles}
                    disabled
                    defaultValue={values.status}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Grade">
                  <Input
                    focusBorderColor="none"
                    sx={inputStyles}
                    disabled
                    defaultValue={values.grade}
                    type="text"
                  />
                </FormField>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <h4>Work Experience</h4>
          <div className="details">
            <div className="labelinput">
              <FormField label="Employer">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.employer}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Position">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.position}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Country">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.wkoCuntry}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Salary">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.salary}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Start Date">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.start}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="End Date">
                <Input
                  focusBorderColor="none"
                  sx={inputStyles}
                  disabled
                  defaultValue={values.end}
                  type="text"
                />
              </FormField>
            </div>
          </div>
        </div>
      </EduWrapper>

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
                    sx={inputBoxStyles}
                    disabled
                    defaultValue={values.tuition}
                    type="text"
                  />
                </div>
                <div className="labelinput">
                  <p>Tuition fees already paid</p>
                  <Input
                    sx={inputBoxStyles}
                    disabled
                    defaultValue={values.paidTuition}
                    type="text"
                  />
                </div>
                <div className="labelinput">
                  <p>Total tuition</p>
                  <Input
                    sx={inputBoxStyles}
                    disabled
                    defaultValue={values.totalTuition}
                    type="email"
                  />
                </div>
                <div className="labelinput">
                  <p>Books / Study material</p>
                  <Input
                    sx={inputBoxStyles}
                    disabled
                    defaultValue={values.studyMat}
                    type="text"
                  />
                </div>
                <div className="labelinput">
                  <p>Rents / Utilities</p>
                  <Input
                    sx={inputBoxStyles}
                    disabled
                    defaultValue={values.utilities}
                    type="text"
                  />
                </div>
                <div className="labelinput">
                  <p>Transportation</p>
                  <Input
                    sx={inputBoxStyles}
                    disabled
                    defaultValue={values.trans}
                    type="text"
                  />
                </div>
                <div className="labelinput">
                  <p>Other</p>
                  <Input
                    sx={inputBoxStyles}
                    disabled
                    defaultValue={values.other}
                    type="text"
                  />
                </div>
                <div className="labelinput">
                  <p>Total living expenses</p>
                  <Input
                    sx={inputBoxStyles}
                    disabled
                    defaultValue={values.totalExp}
                    type="text"
                  />
                </div>
                <div className="totbudget">
                  <p>Total budget needed</p>
                  <Input sx={inputBoxStyles} disabled />
                </div>
              </div>
            </div>
            <div className="otherfund">
              <h4>Funding from other sources</h4>
              <div className="labelinput">
                <p>Own funds / Family contributions</p>
                <Input
                  sx={inputBoxStyles}
                  disabled
                  defaultValue={values.ownFund}
                  type="text"
                />
              </div>
              <div className="labelinput">
                <p>Scholarships</p>
                <Input
                  sx={inputBoxStyles}
                  disabled
                  defaultValue={values.scholarship}
                  type="text"
                />
              </div>
              <div className="labelinput">
                <p>Government Masters/Doctoral loans</p>
                <Input
                  sx={inputBoxStyles}
                  disabled
                  defaultValue={values.govt}
                  type="text"
                />
              </div>
              <div className="labelinput">
                <p>Other loans towards this course</p>
                <Input
                  sx={inputBoxStyles}
                  disabled
                  defaultValue={values.otherloans}
                  type="text"
                />
              </div>
              <div className="totalcase">
                <div className="totfunding">
                  <p>Total funding</p>
                  <Input sx={inputBoxStyles} disabled />
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
                sx={inputBoxStyles}
                disabled
                defaultValue={values.totSaving}
                type="text"
              />
            </div>
            <div className="labelinput">
              <p>Total Non-Cash Investments/Assets</p>
              <Input
                sx={inputBoxStyles}
                disabled
                defaultValue={values.totNonCash}
                type="text"
              />
            </div>
            <div className="labelinput">
              <p>Total Previous Student Loans Outstanding</p>
              <Input
                sx={inputBoxStyles}
                defaultValue={values.prevLoans}
                disabled
                type="text"
              />
            </div>
            <div className="labelinput">
              <p>Any other Loans </p>
              <Input
                sx={inputBoxStyles}
                defaultValue={values.anyLoan}
                disabled
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="info">
            <div className="infobox">
              <p>
                Have you been declared bankrupt or had any County Court
                Judgements (CCJs) against you or entered into an Individual
                Voluntary Arrangements (IVAs) in the last 6 years?
              </p>
              <div className="check">
                <div>
                  <Checkbox className="checkbox" disabled type="text">
                    Yes
                  </Checkbox>
                </div>
                <div>
                  <Checkbox className="checkbox" disabled type="text">
                    No
                  </Checkbox>
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="infobox">
              <p>
                Have you been declared bankrupt or had any County Court
                Judgements (CCJs) against you or entered into an Individual
                Voluntary Arrangements (IVAs) in the last 6 years?
              </p>
              <div className="check">
                <div>
                  <Checkbox
                    className="checkbox"
                    defaultValue={values.totSaving}
                    disabled
                    type="text"
                  >
                    Yes
                  </Checkbox>
                </div>
                <div>
                  <Checkbox
                    className="checkbox"
                    defaultValue={values.totSaving}
                    disabled
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
              disabled
              type="text"
              className="optional"
              focusBorderColor="none"
              sx={inputStyles}
            />
          </div>
        </div>
      </FinWrapper>
    </div>
  );
}

export default Review;
