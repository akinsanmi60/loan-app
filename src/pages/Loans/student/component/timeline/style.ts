import styled from "styled-components";

const TimeWrapper = styled.div`
  h1 {
    font-size: 1.3rem;
    color: #16194f;
  }
`;
export default TimeWrapper;

export const TimeBox = styled.div`
  .vertical-timeline-element-content {
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 1rem 0.8em !important;
    margin-top: -20px;
    p {
        color: #16194f;
    }
        @media screen and (min-width: 1100px) {
      .vertical-timeline-element-date {
        margin-top: 0.5rem;
      }
  }
`;
