import React from "react";
import { FaBell, FaRocketchat } from "react-icons/fa";
import { TopWrapper } from "./style";

function TopNav() {
  return (
    <TopWrapper>
      <div className="wrapper">
        <div className="sideA">you</div>
        <div className="sideB">
          <div className="item">
            <FaRocketchat className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FaBell className="icon" />
            <div className="counter">1</div>
          </div>
          {/* <div className="item">
            <FaUserCircle className="icon" />
          </div> */}
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </TopWrapper>
  );
}

export default TopNav;
