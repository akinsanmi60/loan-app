import { InnerLayout } from "pages/Contact/style";
import React from "react";
import StudentQA from "./components";
import { Wrapper } from "./style";

function Question() {
  return (
    <Wrapper>
      <InnerLayout>
        <div className="outletcontainer">
          <h1 style={{ textAlign: "center" }}>Do you have a question?</h1>
          <StudentQA />
        </div>
      </InnerLayout>
    </Wrapper>
  );
}

export default Question;
