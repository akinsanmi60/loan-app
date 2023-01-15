import React from "react";
import { Link } from "react-router-dom";
import { FaPenFancy, FaSearch, FaWpforms } from "react-icons/fa";
import ReasonComp from "./component";
import busimage from "../../assets/piggy.jpg";
import stud from "../../assets/savings.jpg";
import allstud from "../../assets/student_PNG73.png";
import calculator from "../../assets/calculator.png";

import { InnerLayout } from "../Contact/style";
import HomeWrapper from "./style";

function Home() {
  return (
    <HomeWrapper>
      <div className="banner">
        <img src={stud} alt="banner" className="img" />
      </div>

      <div className="who">
        <InnerLayout>
          <h2>Why Humoni?</h2>
          <p>
            We use machine learning to predict borrower's behaviour and
            instantly evaluate loan applications. We aim at offering digital
            financial services to help you get closer to your personal and
            business goals.
            <br />
            <br />
            We're the best partner for international students in Africa! Humoni
            offers student loans for international students who are attending an
            eligible U.k. college or university.
          </p>
          <div>
            <ReasonComp />
          </div>
        </InnerLayout>
      </div>

      <div className="trust">
        <img className="img" src={busimage} alt="Second slide" />
      </div>

      <div className="advertBox">
        <InnerLayout>
          <div className="reg-advert">
            <div className="adimg">
              <img src={allstud} alt="student" />
            </div>
            <div className="adform">
              <div className="box1">
                <div className="lobo">
                  <FaPenFancy className="fa" />
                  <h3>Register Account</h3>
                </div>
              </div>
              <div className="box1">
                <div className="lobo">
                  <FaSearch className="fa" />
                  <h3>Find The Loan Available</h3>
                </div>
              </div>
              <div className="box1">
                <div className="lobo">
                  <FaWpforms className="fa" />
                  <h3>Apply For The Loan</h3>
                </div>
              </div>
            </div>
          </div>
        </InnerLayout>
      </div>

      <div className="calculator">
        <img src={calculator} alt="" />
        <div className="calText">
          <h1 className="textCal">Do you want to learn more?</h1>
          <h1 className="textCal">
            <Link to="/calculator" className="link">
              Check out our loan calculator
            </Link>
          </h1>
        </div>
      </div>
    </HomeWrapper>
  );
}

export default Home;
