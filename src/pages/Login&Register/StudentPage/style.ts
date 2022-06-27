import styled from "styled-components";

const SignupContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--neutral-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export default SignupContainer;

export const SignupContainerForm = styled.div`
  width: 900px;
  height: 700px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

  .left {
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

  .left h1 {
    margin-top: 0;
    color: white;
    font-size: 30px;
    align-self: center;
  }

  .right {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--neutral-light);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 50px;
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
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    margin-top: 0;
  }

  Input {
    outline: none;
    width: 40vw;
    padding: 10px;
    border-radius: 6px;
    background-color: #edf5f3;
    margin: 5px 0;
    font-size: 14px;
    border: 1px solid #ced4da;
  }

  .error_msg {
    margin: 5px 0;
    font-size: 8px;
    color: #f34646;
    border-radius: 5px;
    text-align: center;
  }
`;
