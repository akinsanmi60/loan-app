import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaRegWindowClose } from "react-icons/fa";

const NavigationStyled = styled.nav`
  background: var(--neutral-light);
  height: 19%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 9999;
`;
export default NavigationStyled;

export const NavLink = styled(Link)`
  color: #16194f;
  margin-top: 10px;
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

export const Bars = styled(FaBars)`
  display: none;
  color: #16194f;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const CloseBars = styled(FaRegWindowClose)`
  display: none;
  color: #16194f;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  .navlink {
    display: flex;
    gap: 150px;
    margin-left: 100px;
    @media screen and (max-width: 769px) {
      display: none;
    }
    .navlink-container {
      margin-top: 5px;
      display: flex;
      align-items: center;
      margin-right: -24px;
    }
  }

  @media screen and (max-width: 768px) {
    #nav-mobile {
      display: block;
      position: absolute;
      right: 0px;
      top: 4rem;
      width: 100%;
      background: red;
      padding: 20px;
      transition: all 0.3s;
      color: var(--neutral-light);
      z-index: 111;

      .navlink-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
      }
    }
    #hide-nav-mobile {
      left: -100%;
    }
  }

  @media screen and (max-width: 500px) {
    #nav-mobile {
      width: 70%;
      right: -5px;
    }
  }
`;

export const NavBtn = styled.nav`
  border: #16194f 2px solid;
  border-radius: 4px;
  padding: 10px;
  background: transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #16194f;
    p {
      color: var(--neutral-light);
    }
  }
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;

export const NavBtnLink = styled(Link)`
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
