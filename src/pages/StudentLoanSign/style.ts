import styled from "styled-components";

const FormWrapper = styled.div`
  .container {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btncase {
    gap: 10;
  }
  .btn-back,
  .btn-next {
    background-color: #16194f;
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
    line-height: 1;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    @media screen and (max-width: 425px) {
      height: 35px;
      margin-top: 5px;
      width: 30%;
      padding: 0.3rem 0rem;
      font-size: 0.8rem;
    }
  }
  .btn-back {
    margin-right: 10px;
  }
`;
export default FormWrapper;

export const inputStyles = {
  borderRadius: "none",
  border: "none",
  outline: "none",
  focusBorderColor: "none",
};
export const inputBoxStyles = {
  borderRadius: "none",
  outline: "none",
  marginBottom: "3px",
};
