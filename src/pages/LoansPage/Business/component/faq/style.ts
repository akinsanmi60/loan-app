import styled from "styled-components";

const QuestionStyled = styled.div`
  background-color: #fff;
  width: 80%;
  margin: 1rem 0;
  padding: 1.8rem 2.8rem;
  border-radius: 6px;
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
