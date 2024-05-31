// import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer";
import { Article } from "./types";


const Layout = ({articles}: {articles: Article[]}) => {
  return (
    <div>
      <Navigation articles={articles} />
      <div className="min-h-[75vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
