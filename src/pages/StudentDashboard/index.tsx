import React, { useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../Context/AuthProvider";
import DashWrapper, {
  ButtonStyled,
  OverviewBox,
  WrapperDetail,
  WrapperOverview,
} from "./style";

function StudentBoard() {
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <DashWrapper>
      <WrapperOverview>
        <div>
          <h3>Hi {authUser?.user.firstName}, Welcome back!</h3>
        </div>
        <div className="loanbalance">
          <div className="loanAmount">
            <p className="loan-title">Loan Balance</p>
            <h1>$5000</h1>
          </div>
          <div className="loandetails">
            <div className="total-loan">
              <h4>Total Loan</h4>
              <p className="pnum">1</p>
            </div>
            <div className="term">
              <h4>Remaining Term</h4>
              <p className="pnum">24months</p>
            </div>
            <div className="Apr">
              <h4>Current APR</h4>
              <p className="pnum">19.3%</p>
            </div>
          </div>
        </div>
        <OverviewBox>
          <div className="principal">
            <h2>$2000</h2>
            <p className="title">Principal Paid</p>
          </div>
          <div className="interest">
            <h2>$5.30</h2>
            <p className="title">Interest Paid</p>
          </div>
          <div className="rate">
            <h2>2.5%</h2>
            <p className="title">Average Interest Rate</p>
          </div>
        </OverviewBox>
      </WrapperOverview>
      <WrapperDetail>
        <div className="summary">
          <h1>Loan Summary</h1>
          <div className="initial">
            <p>Loan Amount</p>
            <p>$10,000</p>
          </div>
          <div className="initial">
            <p>Loan Interest</p>
            <p>$10,000</p>
          </div>
          <div className="sum-total">
            <p>Total - Loan</p>
            <p className="cum">$10,000</p>
          </div>
        </div>
        <div className="payment">
          <p className="reminder">Next Payment</p>
          <p>March 21, 2019</p>
          <h1>$224.30</h1>
          <p className="payment-det">
            <span>$220</span> Principal | <span>$4.30</span> Interest
          </p>

          <div className="pay-btn">
            <ButtonStyled onClick={() => navigate("/auth/userpayment")}>
              Pay Now
            </ButtonStyled>
          </div>
        </div>
      </WrapperDetail>
    </DashWrapper>
  );
}

export default StudentBoard;
