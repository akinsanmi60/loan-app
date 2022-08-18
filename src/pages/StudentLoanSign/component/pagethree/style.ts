import styled from "styled-components";

const FinWrapper = styled.div`
  color: #16194f;
  p {
    font-size: 15px;
    margin-top: 10px;
    @media screen and (min-width: 1025px) {
      font-size: 18px;
    }
    @media screen and (max-width: 425px) {
      font-size: 13px;
    }
    @media screen and (max-width: 375px) {
      font-size: 10px;
    }
    @media screen and (max-width: 320px) {
      font-size: 10px;
    }
  }
  .warning {
    background-color: var(--accent-pink);
    margin-top: 40px;
    margin-bottom: -30px;
    display: flex;
    justify-content: center;
    p {
      margin-top: 0px;
      color: white;
    }
  }
  .box {
    margin-top: 25px;
    box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 0.5rem 0.8em !important;
    .finbox {
      display: grid;
      padding: 30px;
      grid-template-columns: 1fr 1fr;
      @media screen and (max-width: 786px) {
        grid-template-columns: 1fr;
      }
      @media screen and (max-width: 425px) {
        padding: 13px;
      }
      @media screen and (max-width: 320px) {
        padding: 9px;
      }
      .budget {
        padding-right: 30px;
        .totbudget {
          margin-top: 33px;
          padding: 10px;
          background-color: var(--lavender-secondary);
        }
        @media screen and (max-width: 786px) {
          padding-right: 0;
        }
      }
      .otherfund {
        .totfunding {
          margin-top: 240px;
          padding: 10px;
          background-color: var(--lavender-secondary);

          @media screen and (min-width: 1025px) {
            margin-top: 268px;
          }
          @media screen and (max-width: 786px) {
            margin-top: 0;
          }
        }
      }
    }

    .asslib {
      padding: 30px;
      @media screen and (max-width: 425px) {
        padding: 13px;
      }
      @media screen and (max-width: 320px) {
        padding: 9px;
      }
    }
    .info {
      padding: 5px 30px;
      @media screen and (max-width: 425px) {
        padding: 13px;
      }
      @media screen and (max-width: 320px) {
        padding: 9px;
      }
    }
  }
  Input {
    width: 8vw;
    height: 30px;
    color: #16194f;
    outline: none;
    line-height: 1em;
    font-weight: 300;
    padding: 0.125em 0.25em;
    outline: none;
    @media screen and (max-width: 786px) {
      width: 18vw;
    }
    @media screen and (max-width: 425px) {
      width: 15vw;
    }
    @media screen and (max-width: 375px) {
      width: 18vw;
    }
    @media screen and (max-width: 320px) {
      width: 12vw;
    }
  }
  .optional {
    width: 75vw;
    background: none;
    color: #16194f;
    border: none;
    border-bottom: 1px solid #16194f;
    @media screen and (min-width: 1025px) {
      width: 87vw;
    }
    @media screen and (max-width: 786px) {
      width: 80vw;
    }
    @media screen and (max-width: 425px) {
      width: 70vw;
    }
    @media screen and (max-width: 375px) {
      width: 65vw;
    }
  }
  .labelinput,
  .totbudget,
  .totfunding {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid;
    margin-bottom: 20px;
    @media screen and (max-width: 425px) {
      margin-top: 12px;
    }
  }

  .infobox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
    }
  }
  .check {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 50px;
    gap: 20px;
  }
  .checkbox {
    font-size: 15px;
  }
`;
export default FinWrapper;
