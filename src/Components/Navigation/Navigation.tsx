import  { useState } from "react";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Dropdown from "./Dropdown";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

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

const Navbar = ({ articles }: { articles: Article[] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative w-full h-[30vh] bg-cover bg-center featured-bg-image z-20">
      <div className="container mx-auto flex justify-between items-start h-full px-4">
        <Logo />
        <div className="hidden md:flex items-start space-x-4 mt-3 sticky top-0 bg-black bg-opacity-40 p-5">
          <SearchForm articles={articles} />
          <Link to="/articles">
            <button className="text-white mt-1 font-bold">ALL CONTENT</button>
          </Link>
          <Dropdown articles={articles} />
        </div>
        <button
          className="md:hidden text-white sticky top-0 mt-3 bg-black bg-opacity-40 p-5"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        articles={articles}
      />
    </nav>
  );
};

export default Navbar;
