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
    object-fit: cover;
    width: 100%;
    height: 550px;
  }

  .who {
    margin-top: 26px;
    h2 {
      margin-bottom: 10px;
      padding-left: 19px;
      border-left: 8px solid #16194f;
    }
    @media screen and (max-width: 425px) {
      p {
        text-align: center;
      }
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
  .btn {
    display: flex;
    justify-content: center;
    .link {
      text-decoration: underline;
    }
  }

  .calculator {
    position: relative;
    margin-top: 74px;
    .calText {
      position: absolute;
      top: 0;
      margin-top: 15px;
      padding: 20px;
    }
    @media screen and (max-width: 768px) {
      .textCal {
        font-size: 19px;
      }
    }
    @media screen and (max-width: 425px) {
      .textCal {
        font-size: 13px;
      }
    }
  }

  .trust {
    margin-top: 40px;
  }
  .advertBox {
    background-color: #f3f7fd;
    padding: 50px 0;
  }

  .reg-advert {
    margin-top: 30px;
    display: flex;
    justify-content: space-around;

    .adimg {
    }
    img {
      width: 100%;
    }
    .adform {
      padding: 20px;
      width: 50%;
    }
    .box1 {
      margin-top: 8px;
      padding: 20px;
      box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
        0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;
      border-radius: 9px;
      .lobo {
        display: flex;
        .fa {
          margin-top: 5px;
          margin-right: 10px;
        }
        h3 {
          font-size: 21px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      .adform {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 8px;
        padding: 5px;
        margin-top: 10px;
      }
      .box1 {
        width: 100%;
        padding: 15px;

        .lobo {
          .fa {
            margin-top: 5px;
            margin-right: 10px;
          }
          h3 {
            font-size: 15px;
          }
        }
      }
    }
    @media screen and (max-width: 425px) {
      .adform {
        grid-template-columns: 1fr;
        gap: 8px;
        padding: 5px;
      }
    }
    @media screen and (max-width: 320px) {
      margin-top: 0px;
    }
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
