import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--neutral-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export default Container;

export const ContainerForm = styled.div`
  width: 900px;
  height: 700px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

  .left,
  .ram {
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
  .rom {
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

  @media screen and (max-width: 425px) {
    flex-direction: column;
    height: 100%;
    .left,
    .ram {
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

  h1 {
    color: #16194f;
    font-size: 40px;
    margin-top: 0;
  }
  .hero {
    color: #16194f;
    font-size: 40px;
    margin-top: 0;
  }

  Input {
    outline: none;
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    background-color: #edf5f3;
    margin: 5px 0;
    font-size: 14px;
    border: 1px solid #ced4da;
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
    background: transparent;
    margin-top: 15px;
    width: 40px;
    font-size: 20px;
  }
  .text {
    display: none;
  }
  @media screen and (max-width: 425px) {
    h1 {
      font-size: 32px;
    }
    .hero {
      font-size: 28px;
    }
    .text {
      display: revert;
      margin-top: 25px;
    }
  }

  @media screen and (max-width: 320px) {
    h1 {
      font-size: 28px;
    }
  }
`;
