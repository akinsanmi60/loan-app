import styled from "styled-components";

const LoanContainer = styled.div`
  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25),
    0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15) !important;
  padding: 1rem 0.8em !important;
  color: #16194f;
  .loan-container {
    margin-bottom: 70px;
    h1 {
      text-align: center;
      margin-bottom: 28px;
      padding: 20px;
      background-color: var(--dark-primary);
      color: white;
    }
    .form-input {
      margin: 5px 0 10px;
      .range {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 16px;
        p {
          margin-top: 0px;
        }
      }
    }
    .form-input input {
      background: #f2f5f7;
      height: 10px;
      width: 100%;
      outline: none;
    }
    .details {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      label {
        font-size: 15px;
        font-weight: 500;
      }
      .values {
        font-size: 18px;
        font-weight: 700;
        p {
          margin-top: 0px;
        }
      }
    }
    .form-action {
      display: flex;
      justify-content: center;
    }
    .payment-summary {
      margin-top: 30px;
      margin-bottom: 50px;
    }

    .summary {
      display: flex;
      justify-content: space-between;
      width: 100%;
      p {
        margin-top: 8px;
      }

      .monthly {
        font-weight: 900;
      }
    }
  }
`;
export default LoanContainer;

export const InnerLayout = styled.section`
  padding: 0 5rem;
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 425px) {
    padding: 0 0.8rem;
  }
`;

export const ButtonStyled = styled.button`
  background-color: #16194f;
  padding: 0.7rem 1rem;
  color: white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;
  font-size: 0.9375rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 55px;
  @media screen and (max-width: 425px) {
    margin-top: 5px;
    width: 35%;
    padding: 0.3rem 0rem;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 320px) {
    margin-top: 5px;
    width: 50%;
    padding: 0.3rem 0rem;
    font-size: 0.8rem;
  }
`;
