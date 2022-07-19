/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
import React from "react";
// import ScrollToTop from "common/ScrollTop";
import Navbar from "../common/Header";
import Footer from "../common/Footer";

type Props = {
  children: React.ReactNode;
};
const LayoutWrapper: React.FC<Props> = props => (
  <>
    <Navbar />
    {props.children}
    {/* <ScrollToTop /> */}
    <Footer />
  </>
);
export default LayoutWrapper;
