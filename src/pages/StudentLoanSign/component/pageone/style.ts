import styled from "styled-components";

const PersonalWrapper = styled.div`
  color: #16194f;
  .box {
    margin-top: 25px;
    box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 1rem 0.8em !important;
  }
  Input {
    width: 25vw;
    height: 30px;
    background: none;
    color: #16194f;
    border: none;
    border-bottom: 1px solid #16194f;
    line-height: 1em;
    font-weight: 300;
    padding: 0.125em 0.25em;
    outline: none;
    @media screen and (max-width: 425px) {
      width: 35vw;
    }
    @media screen and (max-width: 375px) {
      width: 30vw;
    }
    @media screen and (max-width: 320px) {
      width: 60vw;
    }
  }

  .labelinput {
    margin-top: 20px;
    @media screen and (max-width: 425px) {
      margin-top: 12px;
    }
  }
  .details {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 15px;
    padding-left: 15px;
    margin-bottom: 30px;
    @media screen and (min-width: 1025px) {
      font-size: 18px;
    }
    @media screen and (max-width: 425px) {
      padding-left: 15px;
      font-size: 12px;
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 320px) {
      padding-left: 15px;
      font-size: 12px;
      grid-template-columns: 1fr;
    }
  }

  .address {
    font-size: 15px;
    padding-left: 15px;
    margin-bottom: 30px;
    @media screen and (min-width: 1025px) {
      font-size: 18px;
    }

    .addinput {
      margin-top: 20px;
      .addput {
        width: 83.5vw;
        @media screen and (min-width: 1024px) {
          width: 83.5vw;
        }
      }
      @media screen and (max-width: 425px) {
        margin-top: 12px;
        .addput {
          width: 71vw;
        }
      }
      @media screen and (max-width: 375px) {
        margin-top: 12px;
        .addput {
          width: 66vw;
        }
      }
      @media screen and (max-width: 320px) {
        .addput {
          width: 60vw;
        }
      }
    }
    .add-details {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      @media screen and (max-width: 425px) {
        font-size: 12px;
        grid-template-columns: 1fr 1fr;
      }
      @media screen and (max-width: 320px) {
        font-size: 12px;
        grid-template-columns: 1fr;
      }
    }
  }

  .course {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 15px;
    padding-left: 15px;
    margin-bottom: 30px;
    @media screen and (min-width: 1025px) {
      font-size: 18px;
    }
    @media screen and (max-width: 425px) {
      padding-left: 15px;
      font-size: 12px;
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 320px) {
      padding-left: 15px;
      font-size: 12px;
      grid-template-columns: 1fr;
    }
  }
`;

export default PersonalWrapper;

// export const InnerLayout = styled.section`
//   padding: 5rem;
//   @media screen and (max-width: 768px) {
//     padding: 0 2rem;
//   }
//   @media screen and (max-width: 425px) {
//     padding: 0 0.8rem;
//   }
// `;
