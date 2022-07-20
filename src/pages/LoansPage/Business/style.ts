import styled from "styled-components";

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

  h1 {
    display: flex;
    justify-content: center;
    font-size: 28px;
    margin-top: 35px;
    @media screen and (max-width: 425px) {
      font-size: 23px;
    }
    @media screen and (max-width: 375px) {
      margin-top: 30px;
      font-size: 22px;
    }
  }

  .who {
    margin-top: 26px;
    h2 {
      font-size: 28px;
      margin-bottom: 10px;
      padding-left: 19px;
      border-left: 8px solid #16194f;
      @media screen and (max-width: 425px) {
        font-size: 23px;
      }
      @media screen and (max-width: 375px) {
        margin-top: 30px;
        font-size: 22px;
      }
    }
  }

  .requirement {
    margin-bottom: 40px;
  }
  .req-contain {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
      gap: 0px;
    }
    .box {
      margin-top: 10px;
      margin-bottom: 10px;
      .box-con {
        padding: 1.5rem 1rem;
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
        padding: 1rem 1rem;
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

  .application,
  .calculator,
  .studfaq {
    margin-bottom: 60px;
  }

  .journey {
    margin-bottom: 30px;
    background-color: var(--dark-primary);
    border-top-right-radius: 60px;
    border-bottom-left-radius: 60px;
    color: white;
    display: grid;
    // gap: 10px;
    grid-template-columns: 1fr 1fr;
    padding: 30px;
    .heroin {
      margin-top: 0px;
    }
    .begin-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 786px) {
      .begin-btn {
        margin-top: 40px;
      }
    }
    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
      padding: 18px;
      .begin-btn {
        margin-top: 18px;
      }
    }
  }
`;
export default Businesswrapper;

export const InnerLayout = styled.section`
  padding: 0 5rem;
  .faqtitle {
    font-size: 26px;
    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
    @media screen and (max-width: 375px) {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 425px) {
    padding: 0 0.8rem;
  }
`;

export const ButtonStyled = styled.button`
  background-color: #6ab165;
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
  min-width: 70%;
  height: 60px;
  @media screen and (max-width: 425px) {
    margin-top: 10px;
    width: 35%;
    height: 40px;
    padding: 0.3rem 0rem;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 320px) {
    margin-top: 10px;
    width: 50%;
    padding: 0.3rem 0rem;
    font-size: 0.8rem;
  }
`;
