import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
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

    // @media screen and (max-width: 425px) {
    //   .inner-content {
    //     height: calc(100vh - -10px);
    //   }
    // }
  }
`;
export default AppContainer;
