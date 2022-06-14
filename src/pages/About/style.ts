import styled from "styled-components";

const AboutWrapper = styled.div`
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
  .img {
    background-size: contain;
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
    margin-top: 60px;
    h2 {
      padding-left: 19px;
      border-left: 8px solid #16194f;
    }
  }
  .feed {
    box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 2rem 4rem;
    margin-top: 50px;
    margin-bottom: 30px;
    h1 {
      font-size: 36px;
      text-align: center !important;
    }
    p {
      text-align: center !important;
    }
    .title {
      margin-bottom: 20px;
    }
    .feedbtn,
    btn {
      display: flex;
      justify-content: center;
    }
    @media screen and (max-width: 786px) {
      padding: 2rem 1rem;
    }
  }
`;
export default AboutWrapper;

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
      margin-bottom: 30px;
      .title {
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
