import styled from "styled-components";

const SectionWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .text {
    text-align: start;
    color: #16194f;
    font-size: 18px;
  }
  .container {
    padding: 20px;
    .logoimg,
    .flexgrow {
      display: flex;
      justify-content: center;
    }
  }

  .errorcontainer {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
    }
    .imgbox,
    .textcontainer,
    .btn {
      display: flex;
      justify-content: center;
    }
    .textcontainer {
      align-items: center;
      padding: 0px 50px;
    }
  }
`;
export default SectionWrapper;

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
