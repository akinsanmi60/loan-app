import React from "react";
import { Link } from "react-router-dom";
import ReasonComp from "./component";
import busimage from "../../assets/case3.jpg";
import stud from "../../assets/savings.jpg";
import { ButtonStyled } from "../Contact/style";
import HomeWrapper from "./style";

function Home() {
  return (
    <HomeWrapper>
      <div>
        <img src={stud} alt="" className="img" />
      </div>

      <div className="who">
        <h2>Why Humoni?</h2>
        <p>
          We use machine learning to predict borrower's behaviour and instantly
          evaluate loan applications. We aim at offering digital financial
          services to help you get closer to your personal and business goals.
          <br />
          <br />
          We're the best partner for international students in Africa! HUMONI
          offers student loans for international students who are attending an
          eligible U.k. college or university.
        </p>
        <div>
          <ReasonComp />
        </div>
      </div>

      <div className="trust">
        <img className="img" src={busimage} alt="Second slide" />
      </div>

      <div className="calculator">
        <h1>
          Do you want to learn more? Check out our{" "}
          <Link to="/calculator" className="link">
            loan calculator
          </Link>
        </h1>
      </div>

      <div className="feedbtn">
        <ButtonStyled>Apply!</ButtonStyled>
      </div>
    </HomeWrapper>
  );
}

export default Home;
