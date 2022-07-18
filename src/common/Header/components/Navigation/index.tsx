/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import DrawerExample from "../Drawer";
import NavigationStyled, { NavLink } from "./style";

function HeaderNavigation() {
  return (
    <NavigationStyled>
      <NavLink to="/">
        <h1>HUMONI</h1>
      </NavLink>

      <div className="drawerbox">
        <DrawerExample />
      </div>
    </NavigationStyled>
  );
}

export default HeaderNavigation;
