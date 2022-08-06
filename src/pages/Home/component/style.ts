import styled from "styled-components";

const Box = styled.div`
  .req-contain {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .box {
      margin-top: 10px;
      margin-bottom: 10px;

      .box-con {
        padding: 1.5rem 1rem;
        @media screen and (max-width: 425px) {
          padding: 1rem 1rem;
        }
        .icon {
          display: flex;
          justify-content: center;
          .iconstyle {
            font-size: 50px;
            margin-bottom: -30px;
            @media screen and (max-width: 425px) {
              font-size: 50px;
            }
          }
        }
      }
      .description {
        padding: 1rem 1rem;
        h1 {
          text-align: center;
          font-weight: 700;
        }
        p {
          text-align: center;
        }
      }
    }
    @media screen and (max-width: 375px) {
      grid-template-columns: 1fr;
    }
  }
`;
export default Box;
