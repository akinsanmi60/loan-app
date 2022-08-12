import styled from "styled-components";

const ResetContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #16194f;
  .formbox {
    .titlebox {
      margin-bottom: 14px;
    }
    .title,
    .hero {
      text-align: center;
      font-size: 22px;
      font-weight: 900;
    }

    .hero {
      font-size: 22px;
    }

    .form {
      margin-bottom: 13px;
      label {
        margin-bottom: 2px;
      }
    }

    Input {
      outline: none;
      width: 35vw;
      padding: 10px;
      border-radius: 6px;
      background-color: #edf5f3;
      font-size: 14px;
      border: 1px solid #ced4da;
    }

    .btn {
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }

    .reset_btn {
      outline: none;
      padding: 8px 0;
      background-color: #16194f;
      color: white;
      border-radius: 5px;
      width: 100px;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;
export default ResetContainer;
