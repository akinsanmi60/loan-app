import React from "react";
import { Input } from "@chakra-ui/react";
import FormField from "../../../../common/FormField";
import { ProUser } from "./type";
import PersonalWrapper from "./style";
import { inputStyles } from "../../style";

function UserDetails({ values, handleChange }: ProUser) {
  return (
    <PersonalWrapper>
      <div className="box">
        <h4>Enter your Details</h4>
        <div className="details">
          <div className="labelinput">
            <FormField label="First Name">
              <Input
                defaultValue={values.firstName}
                onChange={handleChange("firstName")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Last Name">
              <Input
                defaultValue={values.lastName}
                onChange={handleChange("lastName")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Email">
              <Input
                defaultValue={values.email}
                onChange={handleChange("email")}
                type="email"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Birth Country">
              <Input
                defaultValue={values.birthCountry}
                onChange={handleChange("birthCountry")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Nationality">
              <Input
                defaultValue={values.nationality}
                onChange={handleChange("nationality")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Country of Residence">
              <Input
                defaultValue={values.residence}
                onChange={handleChange("residence")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Title">
              <Input
                defaultValue={values.title}
                onChange={handleChange("title")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Insurance Nos">
              <Input
                defaultValue={values.insurance}
                onChange={handleChange("insurance")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Mobile Nos">
              <Input
                defaultValue={values.phone}
                onChange={handleChange("phone")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Birth Date">
              <Input
                defaultValue={values.birth}
                onChange={handleChange("birth")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Marital Status">
              <Input
                defaultValue={values.marital}
                onChange={handleChange("marital")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Nos of Dependants">
              <Input
                defaultValue={values.dependant}
                onChange={handleChange("dependant")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
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
                className="addput"
                defaultValue={values.address}
                onChange={handleChange("address")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="add-details">
            <div className="labelinput">
              <FormField label="Post Code">
                <Input
                  defaultValue={values.countryCode}
                  onChange={handleChange("countryCode")}
                  type="text"
                  focusBorderColor="none"
                  sx={inputStyles}
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Land Mark">
                <Input
                  defaultValue={values.landMark}
                  onChange={handleChange("landMark")}
                  type="text"
                  focusBorderColor="none"
                  sx={inputStyles}
                />
              </FormField>
            </div>
            <div className="labelinput">
              <FormField label="Move in Date">
                <Input
                  defaultValue={values.movedate}
                  onChange={handleChange("movedate")}
                  type="text"
                  focusBorderColor="none"
                  sx={inputStyles}
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
                defaultValue={values.typeCourse}
                onChange={handleChange("typeCourse")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Mode of Study">
              <Input
                defaultValue={values.study}
                onChange={handleChange("study")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="School">
              <Input
                defaultValue={values.schoolName}
                onChange={handleChange("schoolName")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Degree">
              <Input
                defaultValue={values.degree}
                onChange={handleChange("degree")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Commencement Date">
              <Input
                defaultValue={values.completeDate}
                onChange={handleChange("completeDate")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Course finishes">
              <Input
                defaultValue={values.endDate}
                onChange={handleChange("endDate")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
          <div className="labelinput">
            <FormField label="Course Duration">
              <Input
                defaultValue={values.courseDuration}
                onChange={handleChange("courseDuration")}
                type="text"
                focusBorderColor="none"
                sx={inputStyles}
              />
            </FormField>
          </div>
        </div>
      </div>
    </PersonalWrapper>
  );
}

export default UserDetails;
