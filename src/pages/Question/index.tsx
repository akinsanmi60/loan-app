import React from "react";
import { Link, Outlet } from "react-router-dom";
import LinkItem, { Wrapper } from "./style";

function Question() {
  const linkItems = [
    {
      title: "Student Loan",
      path: "studentqa",
    },
    {
      title: "Business Loan",
      path: "businessqa",
    },
  ];
  return (
    <Wrapper>
      <div className="text">
        {linkItems.map(linkAvailable => (
          <div className="connect" key={linkAvailable.title}>
            <LinkItem>
              <Link to={linkAvailable.path}> {linkAvailable.title}</Link>
            </LinkItem>
          </div>
        ))}
      </div>
      <div className="outletcontainer">
        <h1>Do you have a question?</h1>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
}

export default Question;
