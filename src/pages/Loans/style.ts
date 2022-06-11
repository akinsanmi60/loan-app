import styled from "styled-components";
import libimage from "../../assets/libr.jpg";

export const StudentWrapper = styled.div`
  color: #16194f;
   p {
    font-size: 15px;
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
  .wallpaper img {
       
  }
  .pawa {
    margin-bottom: 30px;
    .faq {
      display: flex;
      justify-content: center;
      font-size: 28px;
      margin-top: 30px;
      margin-bottom: -10px;
      @media screen and (max-width: 425px) {
        font-size: 20px;
      }
      @media screen and (max-width: 375px) {
        margin-top: 30px;
        font-size: 16px;
      }
    }
    .eligibilty {
      margin-top: 22px;
      row-gap: 20px;
      display: grid;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      p {
        
      }
      .hero {
        display: flex;
        max-width: 284px;
        margin: 0px auto;
        .fa {
          width: 64px;
          height: 64px;
        }
        .kuchi {
          width: calc(100% - 84px);
          font-size: 20px;
          text-align: left;
        }
      }
      @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
      }
    }

  }
  .general {
    margin-top: 30px;
    margin-bottom: 30px;
       @media screen and (max-width: 375px) {
      margin-bottom: 25px;
    }
  }
  .focus {
    display: flex;
    img {
      width: 450px;
      height: 346px;
    }
    .text {
      padding-right: 16px;
      p {
        font-size: 14px;
        text-align: justify;
        margin-top: 5px;
      }
     
    } 

     @media screen and (min-width: 1026px) {
       .text {
            p {
        font-size: 22px;
        text-align: justify;
        margin-top: 5px;
      }
       }
        img {
      width: 650px;
      height: 446px;
    }
     }

    @media screen and (max-width: 425px) {
      flex-direction: column;
      flex-direction: column-reverse;
      .text {
        p {
          text-align: justify;
        }
      }
      img {
        width: 360px;
        height: auto;
        margin-bottom: 15px;
      }
    }
    @media screen and (max-width: 375px) {
      img {
        width: 307px;
    }
    @media screen and (max-width: 320px) {
      img {
        width: 253px;
    }
  }

  .studfaq {
  }
`;

export const ImgWrapper = styled.div`
  background-image: url(${libimage});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 90vh;
  width: 100%;
  @media screen and (max-width: 425px) {
    background-size: contain;
  }
`;
const QuestionStyled = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 1rem 0;
  padding: 1.8rem 2.8rem;
  border-radius: 24px;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25),
    0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15) !important;
  @media screen and (max-width: 425px) {
    padding: 1rem 1.5rem;
  }

  p {
    transition: all 0.4s ease-in-out;
    text-align: justify;
  }
  h4 {
    color: #16194f;
    transition: all 0.4s ease-in-out;
    font-size: 1.3rem;
    margin-bottom: 12px;
  }
  .toggle-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.4s ease-in-out;
    .click {
      background: transparent;
      outline: none;
      cursor: pointer;
      border: none;
    }
  }

  @media screen and (max-width: 425px) {
    padding: 1rem 1.5rem;
    width: 100%;
    h4 {
      font-size: 16px;
    }
  }
`;
export default QuestionStyled;

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
