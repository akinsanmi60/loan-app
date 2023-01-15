/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { repaymentfaq } from "../../data";
import QuestionStyled from "./style";

type QProp = {
  question: {
    title: string;
    description: string;
  };
};

function Questioncard({ question }: QProp) {
  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };
  return (
    <QuestionStyled>
      <div className="q-con">
        <div className="toggle-title" onClick={btnToggler}>
          <h4>{question.title}</h4>
          <div className="click" onClick={btnToggler}>
            {toggle ? <FaMinusCircle /> : <FaPlusCircle />}
          </div>
        </div>
        {toggle && <p>{question.description}</p>}
      </div>
    </QuestionStyled>
  );
}

function BusinessFaq() {
  return (
    <div>
      {repaymentfaq.map(question => (
        <div
          key={question.title}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Questioncard question={question} />
        </div>
      ))}
    </div>
  );
}

export default BusinessFaq;
