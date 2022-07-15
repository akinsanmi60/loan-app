import React from "react";
import StudentQA from "./components";
import { Wrapper } from "./style";

function Question() {
  return (
    <Wrapper>
      <div className="outletcontainer">
        <h1>Do you have a question?</h1>
        <StudentQA />
      </div>
    </Wrapper>
  );
}

export default Question;
