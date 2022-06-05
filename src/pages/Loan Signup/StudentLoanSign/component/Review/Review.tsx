/* eslint-disable react/function-component-definition */
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
// import firebase from "../config/firebase";
type ProValues = {
  values: {
    firstName: string;
    lastName: string;
    email: string;
    job: string;
    city: string;
    country: string;
  };
};
const Review = ({ values }: ProValues) => {
  return (
    <div>
      <h4>Review 😇 </h4>
      <ListGroup style={{ maxWidth: "600px", margin: "auto" }}>
        <ListGroup.Item variant="secondary">
          FIRST NAME: {values.firstName}{" "}
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          LAST NAME: {values.lastName}
        </ListGroup.Item>
        <ListGroup.Item variant="danger">EMAIL: {values.email}</ListGroup.Item>
        <ListGroup.Item variant="info">JOB: {values.job} </ListGroup.Item>
        <ListGroup.Item variant="light">CITY: {values.city}</ListGroup.Item>
        <ListGroup.Item variant="dark">
          COUNTRY: {values.country}{" "}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Review;
