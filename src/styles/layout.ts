import styled from "styled-components";

const OuterLayout = styled.section`
  padding: 2rem 4rem;
  @media screen and (max-width: 1347px) {
    padding: 5rem 10rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 4rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 3rem 2rem;
  }
`;
export default OuterLayout;
export const InnerLayout = styled.section`
  padding: 2rem 0;
`;
