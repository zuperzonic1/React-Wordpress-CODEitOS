// import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
// import Footer from "./Footer";
interface Article {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  modified: string;
  excerpt: string;
  author: string;
  articleUrl: string;
  publishedDate: string;
  publisher: string;
  categories: string;
  tags: string;
  content: string;
}

const Layout = ({articles}: {articles: Article[]}) => {
  return (
    <div>
      <Navigation articles={articles} />
      <div className="min-h-[75vh]">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
