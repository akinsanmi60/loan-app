import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FootWrapper from "./style";
import city from "../../assets/Footer.png";

function index() {
  return (
    <>
      <div>
        <img src={city} alt="city" />
      </div>
      <FootWrapper>
        <div className="footercase">
          <div className="detail">
            <h4>HUMONI</h4>
            <Link to="/about" className="link">
              About
            </Link>
            <Link to="/career" className="link">
              Career
            </Link>
            <Link to="/press" className="link">
              Press
            </Link>
            <Link to="/contact" className="link">
              Contact Info
            </Link>
            <Link to="/question" className="link">
              Frequently Asked Question
            </Link>
          </div>
          <div className="detail">
            <h4>Customer Service</h4>
            <p className="link">+234813759225</p>
            <p className="link">hello@humoni.com</p>
            <p className="link">24/7 customer service</p>
            <p className="linklogo">
              <span>
                <FaFacebookSquare />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaWhatsappSquare />
              </span>
              <span>
                <FaTwitterSquare />
              </span>
            </p>
          </div>
          <div className="detail">
            <h4>Products</h4>
            <Link to="/student" className="link">
              Student Loan
            </Link>
            <Link to="/business" className="link">
              Business Loan
            </Link>
            <Link to="/carloan" className="link">
              Car Loan
            </Link>
            <Link to="/mortgage" className="link">
              Mortgage Loan
            </Link>
            <Link to="/remittance" className="link">
              Remittance
            </Link>
          </div>
          <div className="detail">
            <h4>Damola</h4>
            <p className="link">+234813759225</p>
            <p className="link">damola@humoni.com</p>
            <p className="link">Business-hours @9AM-6PM (Business Days)</p>
          </div>
        </div>
        <div className="foottext">
          <h4>Legal Terms and Policies</h4>
          <div className="copyright">
            <p>Copyright © Humoni 2022. All rights reserved</p>
            <h4>HUMONI</h4>
          </div>
        </div>
      </FootWrapper>
    </>
  );
}

export default index;
