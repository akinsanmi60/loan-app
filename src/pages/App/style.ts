import styled from "styled-components";

const AppContainer = styled.div`
  .container {
    display: flex;
    overflow-y: hidden;
  }

  .AppContentBox {
    flex: 6;

    .inner-content {
      padding: 2rem 1rem;
      width: 100%;
      overflow-x: hidden;
      overflow-y: unset;
      height: calc(100vh - 2px);
      background: var(--neutral-light);
    }
  }
`;
export default AppContainer;
