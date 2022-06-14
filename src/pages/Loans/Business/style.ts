import styled from "styled-components";
import biz from "../../../assets/biz.jpg";

const Businesswrapper = styled.div`
  color: #16194f;
  .img {
    background-size: contain;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
  }
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
  .who {
    margin-top: 26px;
    h2 {
      margin-bottom: 10px;
      padding-left: 19px;
      border-left: 8px solid #16194f;
    }
  }

  .req-contain {
    margin-top: 26px;
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
      gap: 0px;
    }
    .box {
      margin-top: 20px;
      margin-bottom: 30px;
      .box-con {
        padding: 2rem 1rem;
        @media screen and (max-width: 425px) {
          padding: 1rem 1rem;
        }
        .icon {
          display: flex;
          justify-content: center;
          .iconstyle {
            font-size: 90px;
            margin-bottom: -30px;
            @media screen and (max-width: 425px) {
              font-size: 50px;
            }
          }
        }
      }
      .description {
        padding: 2rem 1rem;
        h1 {
          text-align: center;
          font-weight: 700;
        }
        p {
          text-align: center;
        }
      }
    }
  }
`;
export default Businesswrapper;

export const ImageWrapper = styled.div`
  background-image: url(${biz});
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 87vh;
  width: 100%;
  @media screen and (max-width: 768px) {
    background-size: contain;
    margin-bottom: -320px;
  }
  @media screen and (max-width: 768px) {
    background-size: contain;
    margin-bottom: -320px;
  }
  @media screen and (max-width: 425px) {
    background-size: contain;
    margin-bottom: -180px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: -215px;
  }
  @media screen and (max-width: 320px) {
    margin-bottom: -235px;
  }
`;

export const InnerLayout = styled.section`
  padding: 0 5rem;
  .faqtitle {
    font-size: 28px;
    margin-bottom: -10px;
    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
    @media screen and (max-width: 375px) {
      margin-top: 30px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 425px) {
    padding: 0 0.8rem;
  }
`;
