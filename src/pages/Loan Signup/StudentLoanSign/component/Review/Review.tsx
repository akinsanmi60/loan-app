import { Checkbox, Input } from "@chakra-ui/react";
import React from "react";
import FormField from "../../../../../common/FormField";
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
                <Input disabled defaultValue={values.firstName} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Last Name">
                <Input disabled defaultValue={values.lastName} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Email">
                <Input disabled defaultValue={values.email} type="email" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Birth Country">
                <Input
                  disabled
                  defaultValue={values.birthCountry}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Nationality">
                <Input disabled defaultValue={values.nationality} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Country of Residence">
                <Input disabled defaultValue={values.residence} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Title">
                <Input disabled defaultValue={values.title} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Insurance Nos">
                <Input disabled defaultValue={values.insurance} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Mobile Nos">
                <Input disabled defaultValue={values.phone} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Birth Date">
                <Input disabled defaultValue={values.birth} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Marital Status">
                <Input disabled defaultValue={values.marital} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Nos of Dependants">
                <Input disabled defaultValue={values.dependant} type="text" />
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
                    disabled
                    defaultValue={values.countryCode}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Land Mark">
                  <Input disabled defaultValue={values.landMark} type="text" />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Move in Date">
                  <Input disabled defaultValue={values.movedate} type="text" />
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
                <Input disabled defaultValue={values.typeCourse} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Mode of Study">
                <Input disabled defaultValue={values.study} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="School">
                <Input disabled defaultValue={values.schoolName} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Degree">
                <Input disabled defaultValue={values.degree} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Commencement Date">
                <Input
                  disabled
                  defaultValue={values.completeDate}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Course finishes">
                <Input disabled defaultValue={values.endDate} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Course Duration">
                <Input
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
                  <Input disabled defaultValue={values.compDate} type="text" />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Course Type">
                  <Input
                    disabled
                    defaultValue={values.courseType}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Course Name">
                  <Input
                    disabled
                    defaultValue={values.courseName}
                    type="text"
                  />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Status">
                  <Input disabled defaultValue={values.status} type="text" />
                </FormField>
              </div>
              <div className="labelinput">
                <FormField label="Grade">
                  <Input disabled defaultValue={values.grade} type="text" />
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
                <Input disabled defaultValue={values.employer} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Position">
                <Input disabled defaultValue={values.position} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Country">
                <Input disabled defaultValue={values.wkoCuntry} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Salary">
                <Input disabled defaultValue={values.salary} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Start Date">
                <Input disabled defaultValue={values.start} type="text" />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="End Date">
                <Input disabled defaultValue={values.end} type="text" />
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
                  <Input disabled defaultValue={values.tuition} type="text" />
                </div>
                <div className="labelinput">
                  <p>Tuition fees already paid</p>
                  <Input
                    disabled
                    defaultValue={values.paidTuition}
                    type="text"
                  />
                </div>
                <div className="labelinput">
                  <p>Total tuition</p>
                  <Input
                    disabled
                    defaultValue={values.totalTuition}
                    type="email"
                  />
                </div>
                <div className="labelinput">
                  <p>Books / Study material</p>
                  <Input disabled defaultValue={values.studyMat} type="text" />
                </div>
                <div className="labelinput">
                  <p>Rents / Utilities</p>
                  <Input disabled defaultValue={values.utilities} type="text" />
                </div>
                <div className="labelinput">
                  <p>Transportation</p>
                  <Input disabled defaultValue={values.trans} type="text" />
                </div>
                <div className="labelinput">
                  <p>Other</p>
                  <Input disabled defaultValue={values.other} type="text" />
                </div>
                <div className="labelinput">
                  <p>Total living expenses</p>
                  <Input disabled defaultValue={values.totalExp} type="text" />
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
                <Input disabled defaultValue={values.ownFund} type="text" />
              </div>
              <div className="labelinput">
                <p>Scholarships</p>
                <Input disabled defaultValue={values.scholarship} type="text" />
              </div>
              <div className="labelinput">
                <p>Government Masters/Doctoral loans</p>
                <Input disabled defaultValue={values.govt} type="text" />
              </div>
              <div className="labelinput">
                <p>Other loans towards this course</p>
                <Input disabled defaultValue={values.otherloans} type="text" />
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
              <Input disabled defaultValue={values.totSaving} type="text" />
            </div>
            <div className="labelinput">
              <p>Total Non-Cash Investments/Assets</p>
              <Input disabled defaultValue={values.totNonCash} type="text" />
            </div>
            <div className="labelinput">
              <p>Total Previous Student Loans Outstanding</p>
              <Input defaultValue={values.prevLoans} disabled type="text" />
            </div>
            <div className="labelinput">
              <p>Any other Loans </p>
              <Input defaultValue={values.anyLoan} disabled type="text" />
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
              <Checkbox defaultValue={values.totSaving} disabled type="text" />
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
            />
          </div>
        </div>
      </FinWrapper>
    </div>
  );
}

export default Review;
