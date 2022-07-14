import React from "react";
import AppLayout from "pages/AppLayout";
import LoanCalculator from "../Loan Calculator";

function Home() {
  return (
    <>
      <LoanCalculator />
      <AppLayout />
    </>
  );
}

export default Home;
