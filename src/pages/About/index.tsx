import React from "react";
import { ButtonStyled } from "../Contact/style";
import stud from "../../assets/student769021.jpg";
import CompanyValue from "./component";
import AboutWrapper from "./style";

function About() {
  return (
    <AboutWrapper>
      <div>
        <img src={stud} alt="" className="img" />
      </div>
      <div className="who">
        <h2>Who We Are</h2>
        <p>
          In an industry known for misinformation and bad actors, we promise to
          stand on the side of borrowers.
          <br />
          <br />
          We support students in every learning experience—whether it’s in the
          classroom or out in the world. With products like private student
          loans, credit cards, and savings accounts—plus our financial tools,
          resources, and information.
        </p>
      </div>
      <div className="coy-value">
        <h2>Our Values</h2>
        <CompanyValue />
      </div>
      <div className="feed">
        <div className="feedtitle">
          <p className="title">Work With ACE</p>
          <h1>We're Hiring!</h1>
          <p>
            Our team is passionate about building smart tools to provide
            customized recommendations for all borrowers. Join us to help fix
            the system!{" "}
            <span>Learn more about what it’s like to work at ACE</span>
          </p>
        </div>
        <div className="feedbtn">
          <ButtonStyled>Careers!</ButtonStyled>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
