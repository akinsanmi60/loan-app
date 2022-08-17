import styled from "styled-components";

const SettingWrapper = styled.div`
  display: flex;
  justify-content: center;

  .box {
    width: 100%;
    margin-top: 25px;
    box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 1rem 0.8em !important;
  }
  Input {
    width: 40vw;
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
  .details {
    font-size: 15px;
    padding: 15px;
    margin-bottom: 30px;
    @media screen and (min-width: 1025px) {
      font-size: 18px;
    }
    @media screen and (max-width: 425px) {
      padding-left: 15px;
      font-size: 12px;
      grid-template-columns: 1fr;
    }
    @media screen and (max-width: 320px) {
      padding-left: 15px;
      font-size: 12px;
      grid-template-columns: 1fr;
    }
  }
  .labelinput,
  .passbtn {
    margin-top: 20px;
    @media screen and (max-width: 425px) {
      margin-top: 12px;
    }
  }
  .passbtn {
    span {
      margin-right: 30px;
    }
    button {
      background-color: green;
      padding: 0.7rem 1rem;
      color: white;
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
        0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
      border-radius: 4px;
    }
  }
`;
export default SettingWrapper;

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
export const inputStyles = {
  borderRadius: "none",
  border: "none",
  outline: "none",
  focusBorderColor: "none",
};
