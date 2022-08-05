import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../common/AppLayout/components/sideNav";
// import TopNav from "../../common/AppLayout/components/topNav";
import AppContainer from "./style";

function AppLayout() {
  return (
    <AppContainer>
      <div className="container">
        <SideNav />
        <div className="AppContentBox">
          {/* <TopNav /> */}
          <div className="inner-content">
            <Outlet />
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default AppLayout;
