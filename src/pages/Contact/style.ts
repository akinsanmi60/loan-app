import styled from "styled-components";

const ContactWrapper = styled.div`
  color: #16194f;
  p,
  .labelinput {
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
    margin-bottom: -10px;
  }

  .box {
    margin-top: 25px;
    box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 2rem 4rem;
    .labelinput {
      margin-top: 15px;
    }
    @media screen and (min-width: 1025px) {
      padding: 4rem 6rem;
    }
    @media screen and (max-width: 786px) {
      padding: 2rem 2rem;
    }
    .condetail {
      margin-top: 25px;
      p {
        margin-top: -4px;
      }
    }
  }

  .feed,
  .faq {
    margin-top: 20px;
    margin-bottom: 30px;
    h1 {
      font-size: 30px;
      text-align: center !important;
    }
    p {
      text-align: center !important;
    }
    .feedbtn,
    btn {
      display: flex;
      justify-content: center;
    }
  }
  Input {
    width: 100%;
    height: 30px;
    background: none;
    color: #16194f;
    border: none;
    border-bottom: 1px solid #16194f;
    line-height: 1em;
    font-weight: 300;
    padding: 0.125em 0.25em;
    outline: none;
  }
`;
export default ContactWrapper;

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

    h1 {
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
  }
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 425px) {
    padding: 0 0.8rem;
  }
`;
export const TextArea = styled.textarea`
  border: 1px solid;
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
`;

export const ButtonStyled = styled.button`
  background-color: #16194f;
  padding: 0.7rem 2rem;
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
  min-width: 64px;
  @media screen and (max-width: 425px) {
    margin-top: 5px;
    width: 30%;
    padding: 0.3rem 0rem;
    font-size: 0.8rem;
  }
`;
