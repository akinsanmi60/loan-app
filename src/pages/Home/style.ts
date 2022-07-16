import styled from "styled-components";

const HomeWrapper = styled.div`
  color: #16194f;

  p {
    font-size: 15px;
    margin-top: 10px;
    @media screen and (min-width: 1025px) {
      font-size: 18px;
    }
    @media screen and (max-width: 425px) {
      font-size: 17px;
    }
    @media screen and (max-width: 375px) {
      font-size: 17px;
    }
    @media screen and (max-width: 320px) {
      font-size: 15px;
    }
  }

  h1,
  h2 {
    font-size: 26px;
    font-weight: 700;
    @media screen and (min-width: 1025px) {
      font-size: 35px;
    }
    @media screen and (max-width: 425px) {
      font-size: 22px;
    }
    @media screen and (max-width: 375px) {
      font-size: 20px;
    }
  }
  .img {
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
  }
  .who {
    margin-top: 26px;
    h2 {
      margin-bottom: 10px;
      padding-left: 19px;
      border-left: 8px solid #16194f;
    }
  }

  .coy-value {
    margin-top: 40px;
    h2 {
      padding-left: 19px;
      border-left: 8px solid #16194f;
    }
  }

  .feedbtn,
  .btn,
  .calculator {
    display: flex;
    justify-content: center;
    .link {
      text-decoration: underline;
    }
  }

  .calculator {
    margin-top: 74px;
  }

  .trust {
    margin-top: 40px;
  }
`;
export default HomeWrapper;

export const ValueWrapper = styled.div`
  color: #16194f;
  .values {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    .value-container {
      width: 95%;
      box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
        0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;
      margin-top: 20px;
      margin-bottom: 10px;
      .title {
        h3,
        h4 {
          font-size: 22px;
          font-weight: 700;
          @media screen and (min-width: 1025px) {
            font-size: 25px;
          }
          @media screen and (max-width: 425px) {
            font-size: 22px;
          }
          @media screen and (max-width: 375px) {
            font-size: 20px;
          }
        }
        padding: 2rem 1rem;
        color: white;
        background-color: var(--dark-primary);
      }
      .descrip {
        padding: 2rem 1rem;
      }
    }
    @media screen and (min-width: 1025px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
    }
  }
`;
