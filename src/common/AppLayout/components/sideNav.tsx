import React, { useState } from "react";
import { FaBars, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import { studentNavigation } from "utils/navigationRoutes";
import SideWrapper from "./style";

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <SideWrapper style={{ width: isOpen ? "200px" : "60px" }}>
      <div className="top_section">
        <div className="top">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Humoni
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
      </div>
      <hr />
      {studentNavigation.map(item => (
        <Link to={item.path} key={item.title} className="link">
          <div className="icon">{item.icon}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            {item.title}
          </div>
        </Link>
      ))}
      <hr />
      <div className="btnlogout">
        <button type="submit">
          <FaPowerOff />
        </button>
      </div>
    </SideWrapper>
  );
}

export default SideNav;
