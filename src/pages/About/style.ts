import styled from "styled-components";
import claass from "../../assets/claass.jpg";

const InnerLayout = styled.section`
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
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 425px) {
    padding: 0 0.8rem;
  }
`;
export default InnerLayout;

export const ImgWrapper = styled.div`
  background-image: url(${claass});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 87vh;
  width: 100%;
  @media screen and (max-width: 768px) {
    background-size: contain;
    margin-bottom: -250px;
  }
  @media screen and (max-width: 425px) {
    background-size: contain;
    margin-bottom: -400px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: -420px;
  }
  @media screen and (max-width: 320px) {
    margin-bottom: -440px;
  }

  .imgtext {
    padding: 6rem 5rem;
    h1 {
      font-size: 60px;
      font-weight: 800;
      color: white;
    }
    p {
      font-size: 40px;
      color: white;
      font-weight: 800;
    }
    @media screen and (max-width: 768px) {
      h1 {
        font-size: 40px;
      }
      p {
        font-size: 20px;
      }
    }
    @media screen and (max-width: 425px) {
      padding: 2rem 1rem;
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;

export const AboutWrapper = styled.div`
  .who {
    margin-top: 26px;
    h2 {
      margin-bottom: 10px;
      padding-left: 19px;
      border-left: 8px solid #16194f;
    }
    @media screen and (max-width: 425px) {
      margin-top: -60px;
    }
    @media screen and (max-width: 375px) {
      margin-top: -90px;
    }
    @media screen and (max-width: 320px) {
      margin-top: -110px;
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
