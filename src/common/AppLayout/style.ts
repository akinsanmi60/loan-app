import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  .container {
    display: flex;
  }

  .AppContentBox {
    flex: 6;

    .inner-content {
      padding: 0 1rem;
      width: 100%;
      overflow-x: hidden;
      height: calc(100vh - 100px);
      background-color: yellow;
    }
  }
`;
export default AppContainer;
