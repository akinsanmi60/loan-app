import React from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../Contact/style";
import stud from "../../assets/savings.jpg";
import HomeWrapper from "./style";
import ReasonComp from "./component";

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
