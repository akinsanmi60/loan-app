import styled from "styled-components";

const AppContainer = styled.div`
  background: var(--neutral-light);

  .navwrap {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0px;
    width: 100%;
    z-index: 1222;
    padding: 0 50px;

    @media screen and (max-width: 425px) {
      padding: 0 20px;
    }
  }

  .container {
    display: flex;
    overflow-y: hidden;
  }

  .sidebox {
    flex: 3;
  }

  .AppContentBox {
    flex: 6;
    .inner-content {
      padding: 1rem;
      width: 100%;
      overflow-x: hidden;
      overflow-y: unset;
      height: calc(100vh - 2px);
      @media screen and (max-width: 768px) {
        height: none;
      }
    }
  }
`;
export default AppContainer;
