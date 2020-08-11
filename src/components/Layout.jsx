import React from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
