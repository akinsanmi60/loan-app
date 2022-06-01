import React from "react";
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import FootWrapper from "./style";

function index() {
  return (
    <FootWrapper>
      <div className="footercase">
        <div className="detail">
          <p>HUMONI</p>
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
          <p>Customer Service</p>
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
          </p>
        </div>
        <div className="detail">
          <p>Products</p>
          <Link to="/about" className="link">
            Student Loan
          </Link>
          <Link to="/contact" className="link">
            Car Loan
          </Link>
          <Link to="/career" className="link">
            Business Loan
          </Link>
          <Link to="/press" className="link">
            Mortgage Loan
          </Link>
          <Link to="/question" className="link">
            Remittance
          </Link>
        </div>
        <div className="detail">
          <p>Damola</p>
          <p className="link">+234813759225</p>
          <p className="link">damola@humoni.com</p>
          <p className="link">Business-hours @9AM-6PM (Business Days)</p>
        </div>
      </div>
      <div className="foottext">
        <p>Legal Terms and Policies</p>
        <div className="copyright">
          <p>Copyright © Humoni 2022. All rights reserved</p>
          {/* <img src="" alt="" /> */}
          <p>HUMONI</p>
        </div>
      </div>
    </FootWrapper>
  );
}

export default index;
