import styled from "styled-components";

const DashWrapper = styled.div`
  margin-top: 15px;
  color: #16194f;
  display: flex;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
export default DashWrapper;

export const OverviewBox = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
  .principal,
  .interest,
  .rate {
    background-color: #fff;
    width: 28%;
    padding: 1.3rem 1.2rem;
    border-radius: 5px;
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    .title {
      font-size: 12px;
    }
  }
  .principal {
    border-left: 3px solid blue;
    border-bottom: 3px solid blue;
  }
  .interest {
    border-left: 3px solid orange;
    border-bottom: 3px solid orange;
  }
  .rate {
    border-left: 3px solid green;
    border-bottom: 3px solid green;
  }

  @media screen and (max-width: 768px) {
    .principal,
    .interest,
    .rate {
      width: 30%;
    }
  }
  @media screen and (max-width: 425px) {
    .principal,
    .interest,
    .rate {
      width: 30%;
    }
  }
`;

export const WrapperOverview = styled.div`
  flex: 6;
  .loanbalance {
    margin-top: 15px;
    h1 {
      font-size: 29px;
      color: red;
    }
    .loan-title {
      font-size: 16px;
    }
  }
  .loandetails {
    margin-top: 15px;
    display: flex;
    h4 {
      font-size: 13px;
    }
    .pnum {
      font-size: 15px;
    }
    .total-loan,
    .term {
      border-right: 2px solid;
      padding-right: 13px;
    }

    .term,
    .Apr {
      padding-left: 13px;
    }
  }
`;
export const WrapperDetail = styled.div`
  padding: 0 2rem;
  flex: 3;
  .summary h1 {
    text-align: center;
    font-size: 25px;
  }

  .summary p {
    font-size: 18px;
  }

  .summary {
    line-height: 35px;
    .initial,
    .sum-total {
      display: flex;
      justify-content: space-around;
      .cum {
        padding: 2px;
        border-top: 2px solid;
        border-bottom: 2px solid;
      }
    }
  }

  .payment {
    margin-top: 50px;
  }

  .reminder {
    margin-bottom: 20px;
  }

  .payment h1 {
    font-size: 28px;
    color: green;
  }
  .payment p {
    font-size: 15px;
  }
  span {
    color: green;
  }

  @media screen and (max-width: 425px) {
    margin-top: 50px;
  }
`;

export const ButtonStyled = styled.button`
  background-color: green;
  padding: 0.7rem 2rem;
  color: white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin-top: 18px;
  font-size: 0.9375rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 60px;
  @media screen and (max-width: 425px) {
    margin-top: 5px;
    width: 30%;
    padding: 0.3rem 0rem;
    font-size: 0.8rem;
  }
`;
