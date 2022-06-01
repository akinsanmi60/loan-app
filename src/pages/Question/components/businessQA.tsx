/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import questionsA from "../data";
import { QuestionStyled } from "../style";

type QProp = {
  question: {
    id: number;
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
        <div className="toggle-title">
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

function BusinessQA() {
  return (
    <div>
      {questionsA.map(question => (
        <div key={question.title}>
          <Questioncard question={question} />
        </div>
      ))}
    </div>
  );
}

export default BusinessQA;
