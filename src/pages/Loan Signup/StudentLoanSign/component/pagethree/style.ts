import styled from "styled-components";

const FinWrapper = styled.div`
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
`;
export default FinWrapper;
