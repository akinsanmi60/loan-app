import styled from "styled-components";

const AppContainer = styled.div`
  height: 100%;
  .container {
    display: flex;
  }

  .AppContentBox {
    flex: 6;

    .inner-content {
      padding: 2rem 1rem;
      width: 100%;
      overflow-x: hidden;
      height: calc(100vh - 2px);
      background: var(--neutral-light);
    }

    @media screen and (max-width: 786px) {
      flex-direction: column;
    }
  }
`;
export default AppContainer;
