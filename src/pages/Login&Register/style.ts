import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--neutral-light);
`;
export default Container;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ContainerForm = styled.div`
  width: 900px;
  height: 750px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

  .left,
  .ram,
  .ver-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-primary);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 20px;
  }

  .ver-left {
    flex: 2;
    p {
      margin-top: 35px;
      color: white;
    }
    .var-text {
      margin-top: -50px;
      h3 {
        color: white;
        font-size: 60px;
        text-align: center;
        margin-bottom: -15px;
      }
      .welname {
        text-align: center;
        text-transform: capitalize;
        font-size: 25px;
      }
    }
  }

  .ram {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .left h1,
  .ram h1 {
    margin-top: 0;
    color: white;
    font-size: 30px;
    align-self: center;
    margin-bottom: 9px;
  }

  .right,
  .rom,
  .ver-right {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--neutral-light);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 30px;
  }

  .white_btn,
  .green_btn {
    border: none;
    outline: none;
    padding: 12px 0;
    background-color: white;
    border-radius: 20px;
    width: 180px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }

  .input-con {
    display: flex;
    justify-content: center;
  }

  .icon {
    margin-top: 26px;
    display: flex;
    justify-content: center;
    margin-bottom: 33px;
    .iconstyle {
      font-size: 50px;
      color: #16194f;
      margin-bottom: -30px;
      @media screen and (max-width: 425px) {
        font-size: 40px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
    height: 100%;
    .left,
    .ram,
    .ver-left {
      display: none;
    }
    .left h1 {
      margin-top: 0;
      color: white;
      font-size: 30px;
      align-self: center;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #16194f;
    font-size: 25px;
  }

  .hero {
    color: #16194f;
    font-size: 35px;
    margin-top: 0;
  }

  .ver-input,
  Input {
    outline: none;
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    margin: 5px 0;
    font-size: 14px;
    border: 1px solid #ced4da;
  }

  .ver-input {
    width: 25vw;
    color: #16194f;
    border-radius: 0px;
    border: none;
    font-size: 20px;
    border-bottom: 1px solid #16194f;
    font-weight: 300;
    margin-top: 40px;
    padding-left: 80px;
    padding-right: 50px;
  }

  .comp-text {
    font-size: 14px;
    text-align: justify;
    color: #16194f;
  }

  .action-text {
    display: flex;
    margin-top: 70px;
    span {
      color: blue;
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .btn {
    margin-top: 25px;
    display: flex;
    justify-content: center;
  }

  .green_btn {
    background-color: var(--dark-primary);
    color: white;
  }
  .form {
    margin-bottom: 5px;
    label {
      color: #16194f;
      font-size: 15px;
      margin-top: 15px;
    }
  }

  .btn-icon {
    margin-right: 2px;
    border: none;
    margin-top: 10px;
    width: 40px;
    font-size: 20px;
    outline: none;
  }
  .text {
    display: none;
  }

  @media screen and (max-width: 786px) {
    .ver-input {
      width: 30vw;
    }
  }

  @media screen and (max-width: 425px) {
    h1 {
      font-size: 32px;
    }

    .hero {
      font-size: 26px;
    }

    .text {
      display: revert;
      margin-top: 25px;
    }

    .ver-input {
      width: 60vw;
    }
  }

  @media screen and (max-width: 375px) {
    .hero {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 320px) {
    h1 {
      font-size: 28px;
    }

    .ver-input {
      width: 60vw;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #16194f;
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;
