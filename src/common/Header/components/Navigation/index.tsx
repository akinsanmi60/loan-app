import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import NavigationStyled, {
  NavMenu,
  NavBtn,
  NavLink,
  Bars,
  NavBtnLink,
} from "./style";

function HeaderNavigation() {
  return (
    <NavigationStyled>
      <NavLink to="/">
        {/* <img src={logo} alt="" /> */}
        <h1>HUMONI</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/student">Student</NavLink>
        <NavLink to="/business">Business</NavLink>
        <NavLink to="/press">Blog</NavLink>
        <NavLink to="/question">FAQ</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signup">
          <p>Apply</p>
          <p>
            <FaSignInAlt />
          </p>
        </NavBtnLink>
      </NavBtn>
    </NavigationStyled>
  );
}

export default HeaderNavigation;
