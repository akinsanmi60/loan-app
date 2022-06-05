/* eslint-disable react/function-component-definition */
import React from "react";
import { Input } from "@chakra-ui/react";
import FormField from "../../../../../common/FormField";
import EduWrapper from "./style";
import { ProEdu } from "./type";

function EductionBio({ values, handleChange }: ProEdu) {
  return (
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
                className="addput"
                defaultValue={values.instName}
                onChange={handleChange("instName")}
                type="text"
              />
            </FormField>
          </div>
          <div className="add-details">
            <div className="labelinput">
              <FormField label="Completion Date">
                <Input
                  defaultValue={values.compDate}
                  onChange={handleChange("compDate")}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Course Type">
                <Input
                  defaultValue={values.courseType}
                  onChange={handleChange("courseType")}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Course Name">
                <Input
                  defaultValue={values.courseName}
                  onChange={handleChange("courseName")}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Status">
                <Input
                  defaultValue={values.status}
                  onChange={handleChange("status")}
                  type="text"
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Grade">
                <Input
                  defaultValue={values.grade}
                  onChange={handleChange("grade")}
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
                defaultValue={values.employer}
                onChange={handleChange("employer")}
                type="text"
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Position">
              <Input
                defaultValue={values.position}
                onChange={handleChange("position")}
                type="text"
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Country">
              <Input
                defaultValue={values.wkoCuntry}
                onChange={handleChange("wkoCuntry")}
                type="text"
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Salary">
              <Input
                defaultValue={values.salary}
                onChange={handleChange("salary")}
                type="text"
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Start Date">
              <Input
                defaultValue={values.start}
                onChange={handleChange("start")}
                type="text"
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="End Date">
              <Input
                defaultValue={values.end}
                onChange={handleChange("end")}
                type="text"
              />
            </FormField>
          </div>
        </div>
      </div>
    </EduWrapper>
  );
}

export default EductionBio;
