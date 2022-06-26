/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import NavigationStyled, {
  NavMenu,
  NavBtn,
  NavLink,
  Bars,
  NavBtnLink,
  CloseBars,
} from "./style";

function HeaderNavigation() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <NavigationStyled>
      <NavLink to="/">
        {/* <img src={logo} alt="" /> */}
        <h1>HUMONI</h1>
      </NavLink>

      <NavMenu>
        <div
          className="navlink"
          id={showMenu ? "nav-mobile" : "hide-nav-mobile"}
        >
          <div className="navlink-container">
            <NavLink to="/student">Student</NavLink>
            <NavLink to="/business">Business</NavLink>
            <NavLink to="/press">Blog</NavLink>
            <NavLink to="/question">FAQ</NavLink>
          </div>
          <NavBtn>
            <NavBtnLink to="/signup">
              <p>Get Started</p>
            </NavBtnLink>
          </NavBtn>
        </div>
      </NavMenu>

      <div onClick={toggleMenu}>{showMenu ? <CloseBars /> : <Bars />}</div>
    </NavigationStyled>
  );
}

export default HeaderNavigation;
