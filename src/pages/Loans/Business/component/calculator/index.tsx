/* eslint-disable react/no-array-index-key */
import { useState } from "react";
import LoanJS from "loanjs";
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
export default function BusinessCalculator() {
  const [values, setValues] = useState({
    "loan-amount": 2500,
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
    console.log("=============", loanAmount);
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

  //   const amountFormat = (amount: number) =>
  //     new Intl.NumberFormat("en-gb", {
  //       style: "currency",
  //       currency: "GBP",
  //     }).format(amount);

  //   const d = new Date();

  return (
    <LoanContainer>
      <InnerLayout>
        <div className="loan-container">
          <h1>Simulate Your Loan</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <div className="details">
                <label htmlFor="loan-amount">Loan Amount To Borrow</label>
                <p className="values">£{values["loan-amount"]}</p>
              </div>
              <div className="form-input">
                <input
                  type="range"
                  name="loan-amount"
                  value={values["loan-amount"]}
                  onChange={handleInputChange}
                  min={2500}
                  max={25000}
                  step={500}
                />
                <div className="range">
                  <p>£2500</p>
                  <p>£25000</p>
                </div>
              </div>
            </div>

            <div className="form-item">
              <div className="details">
                <label htmlFor="interest-rate">Loan Interest Rate</label>
                <p className="values">{values["interest-rate"]}%</p>
              </div>
              <div className="form-input">
                <input
                  type="range"
                  name="interest-rate"
                  value={values["interest-rate"]}
                  onChange={handleInputChange}
                  min={5}
                  max={16}
                  step={0.1}
                />
                <div className="range">
                  <p>5%</p>
                  <p>16%</p>
                </div>
              </div>
            </div>
            <div className="form-item">
              <div className="details">
                <label htmlFor="loan-term">Loan Term Duration</label>
                <p className="values">{values["loan-term"]}Months</p>
              </div>
              <div className="form-input">
                <input
                  type="range"
                  name="loan-term"
                  value={values["loan-term"]}
                  onChange={handleInputChange}
                  min={6}
                  max={24}
                  step={2}
                />
                <div className="range">
                  <p>6 Months</p>
                  <p>24 Months</p>
                </div>
              </div>
            </div>
            <div className="form-action">
              <ButtonStyled type="submit"> Calculate </ButtonStyled>
            </div>
          </form>

          <div className="payment-summary">
            <div className="summary">
              <p className="monthly">Monthly</p>
              <p className="monthly">
                £
                {!loan?.installments[0].installment
                  ? "0"
                  : loan?.installments[0].installment}
              </p>
            </div>
            <div className="summary">
              <p>Total Interest</p>
              <p>
                £{!loan?.interestSum ? "0" : loan?.interestSum.toLocaleString()}
              </p>
            </div>
            <div className="summary">
              <p>Total Amount</p>
              <p> £{!loan?.sum ? "0" : loan?.sum.toLocaleString()}</p>{" "}
            </div>
          </div>
          {/* <InnerLayout>
          {!!loan?.installments?.length && (
            <table>
              <thead>
                <tr>
                  <th>Month</th>
                  <th className="right-hidden">Amount</th>
                  <th className="right">Interest</th>
                  <th className="right-hidden">Principal</th>
                  <th className="right">Balance</th>
                </tr>
              </thead>
              {loan.installments.map((item, index: number) => {
                const nextDate = new Date();
                nextDate.setMonth(d.getMonth() + (index + 1));
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{nextDate.toDateString()}</td>
                      <td className="right-hidden">
                        {amountFormat(item.installment)}
                      </td>
                      <td className="right">{amountFormat(item.interest)}</td>
                      <td className="right-hidden">
                        {amountFormat(item.capital)}
                      </td>
                      <td className="right">{amountFormat(item.remain)}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          )}
        </InnerLayout> */}
        </div>
      </InnerLayout>
    </LoanContainer>
  );
}
