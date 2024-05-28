// import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
// import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <div className="min-h-[75vh]">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
