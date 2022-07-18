import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const NavigationStyled = styled.nav`
  height: 19%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 9999;
  .drawerbox {
    margin-top: 10px;
  }
`;
export default NavigationStyled;

export const NavLink = styled(Link)`
  color: #16194f;
  margin-top: 7px;
  display: flex;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
    font-weight: 900;
  }
`;

export const NavBtnLink = styled(Link)`
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
