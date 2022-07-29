import styled from "styled-components";

const FootWrapper = styled.footer`
  background-color: var(--dark-primary);
  color: "white";
  .footercase {
    padding: 60px 24px;
    display: grid;
    .detail {
      display: flex;
      flex-direction: column;
      color: var(--neutral-light);
      P {
        margin: 0px 0px 32px;
        letter-spacing: -0.01em;
        font-size: 1.125rem;
        line-height: 1.32;
        font-weight: 700;
      }
      .link {
        margin-bottom: 0.5rem;
      }
      .linklogo {
        margin-bottom: 0.5rem;
        display: flex;
        span {
          font-size: 2rem;
          margin-right: 8px;
        }
      }
    }
    @media screen and (min-width: 1366px) {
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 40px;
    }
    @media screen and (min-width: 1152px) {
      padding-left: 56px;
      padding-right: 56px;
    }
    @media screen and (min-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 80px;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      padding-left: 40px;
      padding-right: 40px;
      .detail {
        margin-top: 20px;
      }
    }
    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .foottext {
    padding: 0px 56px;
    color: var(--neutral-light);
    p {
      margin-bottom: 0.5rem;
    }
    .copyright {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 425px) {
        display: flex;
        flex-direction: column;
      }
    }
    @media screen and (max-width: 768px) {
      padding-left: 40px;
      padding-right: 40px;
    }
    @media screen and (max-width: 425px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;
export default FootWrapper;
