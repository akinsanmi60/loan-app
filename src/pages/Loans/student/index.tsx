import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { ImgWrapper, InnerLayout, StudentWrapper } from "../style";
import kampus from "../../../assets/kampus.jpg";
import StudentFaq from "./component/faq";
import Studenttimeline from "./component/timeline";
// import libimage from "../../../assets/libr.jpg";

function Student() {
  return (
    <StudentWrapper>
      <div className="wallpaper">
        <ImgWrapper>heloo</ImgWrapper>
      </div>
      <div className="pawa">
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
      </div>
      <div>
        <InnerLayout>
          <h2 className="faqtitle">How it works.</h2>
          <Studenttimeline />
        </InnerLayout>
      </div>
      <div className="general">
        <div className="focus">
          <div className="text">
            <h2 className="faqtitle">Humoni focused</h2>
            <div>
              <p>
                We understand that students may not have much experience dealing
                with borrowing money and credit, which is why we are dedicated
                to providing support through the process with transparent
                information and only lending when we are confident that the
                student has the ability and means to maintain an affordable
                repayment schedule. Due to Humoni’s ethos of responsible
                lending, tuition payments are paid directly to universities and
                higher education establishments.
              </p>
              <p>
                <br />
              </p>
              <p>
                Maintenance payments can be used for accommodation costs, course
                materials, transport, food or any expenses that may arise during
                your studies, and are paid directly to your bank account.
              </p>
            </div>
          </div>
          <div className="image">
            <img src={kampus} alt="reading" />
          </div>
        </div>
      </div>
      <div className="studfaq">
        <InnerLayout>
          <h2 className="faqtitle">
            Frequently Asked Questions About Student Loan.
          </h2>
          <StudentFaq />
        </InnerLayout>
      </div>
    </StudentWrapper>
  );
}

export default Student;
