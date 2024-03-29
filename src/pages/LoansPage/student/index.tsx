import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { InnerLayout, StudentWrapper } from "../style";
import stud from "../../../assets/student769021.jpg";
import kampus from "../../../assets/kampus.jpg";
import StudentFaq from "./component/faq";
import Studenttimeline from "./component/timeline";

function Student() {
  return (
    <StudentWrapper>
      <div>
        <img src={stud} alt="" className="img" />
      </div>
      <div className="pawa">
        <InnerLayout>
          <h2 className="faq">Am I eligible?</h2>
          <div className="eligibilty">
            <div className="hero">
              <div className="fa">
                <FaCheck />
              </div>
              <div className="kuchi">
                <p>Must be 23 years old or over</p>
              </div>
            </div>
            <div className="hero">
              <div className="fa">
                <FaCheck />
              </div>
              <div className="kuchi">
                <p>At an eligible UK university</p>
              </div>
            </div>
            <div className="hero">
              <div className="fa">
                <FaCheck />
              </div>
              <div className="kuchi">
                <p>You want to study at a school we support</p>
              </div>
            </div>
            <div className="hero">
              <div className="fa">
                <FaCheck />
              </div>
              <div className="kuchi">
                <p>
                  You're from a{" "}
                  <Link to="/country" target="_blank" rel="noopener noreferrer">
                    country we support
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </InnerLayout>
      </div>
      <div>
        <InnerLayout>
          <h2 className="timetitle">How it works.</h2>
          <Studenttimeline />
        </InnerLayout>
      </div>
      <div className="general">
        <InnerLayout>
          <div className="focus">
            <div className="text">
              <h2 className="faqtitle">Humoni focused</h2>
              <div>
                <p>
                  We understand that students may not have much experience
                  dealing with borrowing money and credit, which is why we are
                  dedicated to providing support through the process with
                  transparent information and only lending when we are confident
                  that the student has the ability and means to maintain an
                  affordable repayment schedule. Due to Humoni’s ethos of
                  responsible lending, tuition payments are paid directly to
                  universities and higher education establishments.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Maintenance payments can be used for accommodation costs,
                  course materials, transport, food or any expenses that may
                  arise during your studies, and are paid directly to your bank
                  account.
                </p>
              </div>
            </div>
            <div className="image">
              <img src={kampus} alt="reading" />
            </div>
          </div>
        </InnerLayout>
      </div>
      <div className="studfaq">
        <InnerLayout>
          <h2 className="faqtitle" style={{ textAlign: "center" }}>
            Frequently Asked Questions About Student Loan.
          </h2>
          <StudentFaq />
        </InnerLayout>
      </div>

      {/* <div className="applybtn">
        <p>
          Are you ready to begin your application?{" "}
          <Link to="/studentregister">Yes</Link> /No
        </p>
      </div> */}
    </StudentWrapper>
  );
}

export default Student;
