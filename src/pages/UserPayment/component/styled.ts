/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const WrapperAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  Input {
    outline: none;
    width: 30vw;
    padding: 10px;
    border-radius: 6px;
    background-color: #edf5f3;
    margin: 5px 0;
    font-size: 14px;
    border: 1px solid #ced4da;
  }
  .agreementbtn {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
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
