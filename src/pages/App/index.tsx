import AuthContext from "Context/AuthProvider";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { businessNavigation, studentNavigation } from "utils/navigationRoutes";
import SideNav from "../../common/AppLayout/sideNav";
import TopNav from "../../common/AppLayout/topNav";
import AppContainer from "./style";

function AppLayout() {
  const { authUser } = useContext(AuthContext);
  const userNavigations =
    authUser?.user.accountType[0] === "student"
      ? studentNavigation
      : businessNavigation;
  const navigationModel = [...userNavigations];

  return (
    <AppContainer>
      <div className="navwrap">
        <TopNav navigationModel={navigationModel} />
      </div>
      <div className="container">
        <SideNav navigationModel={navigationModel} />
        <div className="AppContentBox">
          <div className="inner-content">
            <Outlet />
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default AppLayout;
