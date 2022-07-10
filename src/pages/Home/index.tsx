import React from "react";
import { Link } from "react-router-dom";
import LoanCalculator from "../Loan Calculator";

function Home() {
  return (
    <>
      <LoanCalculator />
      <Link to="/businessdashboard">Go</Link>
    </>
  );
}

export default Home;
