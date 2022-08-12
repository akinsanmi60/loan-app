import styled from "styled-components";

type QuestionStyledProps = {
  toggle: boolean;
};

const QuestionStyled = styled.div<QuestionStyledProps>`
  background: ${props => (props.toggle ? "#16194f" : "#fff")};
  color: ${props => (props.toggle ? "#fff" : "#16194f")};
  width: 100%;
  margin: 1rem 0;
  padding: 1rem 2rem;
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
    color: ${props => (props.toggle ? "#fff" : "#16194f")};
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
    padding: 1rem 1rem;
    width: 100%;
    h4 {
      font-size: 16px;
    }
  }
`;
export default QuestionStyled;
