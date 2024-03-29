/* eslint-disable react/no-array-index-key */
import { useState } from "react";
import LoanJS from "loanjs";
import ScheduleTable from "common/ScheduleTable";
import LoanContainer, { ButtonStyled, InnerLayout } from "./style";

type LoanProp = {
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
export default function LoanCalculator() {
  const [values, setValues] = useState({
    "loan-amount": 1000,
    "loan-term": 12,
    "interest-rate": 8,
  });
  const [loan, setLoan] = useState<LoanProp>();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const calculate = (amount: number, month: number, rate: number) => {
    const loanAmount = new LoanJS.Loan(amount, month, rate);
    setLoan(loanAmount);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    calculate(
      values["loan-amount"],
      values["loan-term"],
      values["interest-rate"],
    );
  };

  const amountFormat = (amount: number) =>
    new Intl.NumberFormat("en-gb", {
      style: "currency",
      currency: "GBP",
    }).format(amount);

  localStorage.setItem("loan", JSON.stringify(loan));

  return (
    <LoanContainer>
      <div className="loan-container">
        <h1>Loan Calculator</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <div className="details">
              <label htmlFor="loan-amount">Loan Amount</label>
              <p className="values">{values["loan-amount"]}</p>
            </div>
            <div className="form-input">
              <input
                type="range"
                name="loan-amount"
                value={values["loan-amount"]}
                onChange={handleInputChange}
                min={1000}
                max={35000}
                step={500}
              />
              <div className="range">
                <p>£1000</p>
                <p>£35000</p>
              </div>
            </div>
          </div>

          <div className="form-item">
            <div className="details">
              <label htmlFor="interest-rate">Interest Rate</label>
              <p className="values">{values["interest-rate"]}%</p>
            </div>
            <div className="form-input">
              <input
                type="range"
                name="interest-rate"
                value={values["interest-rate"]}
                onChange={handleInputChange}
                min={8}
                max={25}
                step={0.1}
              />
              <div className="range">
                <p>8%</p>
                <p>25%</p>
              </div>
            </div>
          </div>
          <div className="form-item">
            <div className="details">
              <label htmlFor="loan-term">Loan Term</label>
              <p className="values">{values["loan-term"]}Months</p>
            </div>
            <div className="form-input">
              <input
                type="range"
                name="loan-term"
                value={values["loan-term"]}
                onChange={handleInputChange}
                min={12}
                max={48}
                step={2}
              />
              <div className="range">
                <p>12 Months</p>
                <p>48 Months</p>
              </div>
            </div>
          </div>
          <div className="form-action">
            <ButtonStyled type="submit">Calculate</ButtonStyled>
          </div>
        </form>

        <div className="payment-summary">
          <div className="summary">
            <p className="monthly">Monthly</p>
            <p className="monthly">
              {amountFormat(
                !loan?.installments[0].installment
                  ? 0
                  : loan?.installments[0].installment,
              )}
            </p>
          </div>
          <div className="summary">
            <p>Total Interest</p>
            <p>{amountFormat(!loan?.interestSum ? 0 : loan?.interestSum)}</p>
          </div>
          <div className="summary">
            <p>Total Amount</p>
            <p> {amountFormat(!loan?.sum ? 0 : loan?.sum)}</p>
          </div>
        </div>
        <InnerLayout>
          {!!loan?.installments?.length && <ScheduleTable loan={loan} />}
        </InnerLayout>
      </div>
    </LoanContainer>
  );
}
