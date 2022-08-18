import ScheduleTable from "common/ScheduleTable";
import React from "react";
// import loanData from "./data";

type LoanProps = {
  amount: number;
  capitalSum: number;
  interestSum: number;
  sum: number;
  installments: {
    capital: number;
    installment: number;
    interest: number;
    interestSum: number;
    remain: number;
  }[];
};

function LoanSchedule() {
  const loanString = localStorage.getItem("loan") as string;
  const loanData: LoanProps = JSON.parse(loanString);
  console.log(loanData);

  return (
    <div>
      <ScheduleTable loan={loanData} />
    </div>
  );
}

export default LoanSchedule;
