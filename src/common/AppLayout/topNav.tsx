/* eslint-disable jsx-a11y/no-static-element-interactions */
import AuthContext from "Context/AuthProvider";
import React, { useContext } from "react";
import { FaBell, FaRocketchat } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TopWrapper } from "./style";

type SideProp = {
  navigationModel: {
    path: string;
    icon: JSX.Element;
    title: string;
  }[];
};
function TopNav({ navigationModel }: SideProp) {
  const { logout } = useContext(AuthContext);
  return (
    <TopWrapper>
      <div className="wrapper">
        <div className="sideA">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
        <div className="sideB">
          {navigationModel.map(item => (
            <Link to={item.path} key={item.title} className="link">
              <div className="mobile_icon">{item.icon}</div>
            </Link>
          ))}
          <div className="item">
            <FaRocketchat className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item" onClick={logout}>
            <FaBell className="icon" />
            <div className="counter">1</div>
          </div>
        </div>
      </div>
    </TopWrapper>
  );
}

export default TopNav;
