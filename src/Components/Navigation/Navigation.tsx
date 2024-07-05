import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Dropdown from "./Dropdown";
import MobileMenu from "./MobileMenu";
import { Article } from "../types";

const Navbar = ({ articles }: { articles: Article[] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const searchFormRef = useRef(null);
  const dropdownRef = useRef(null);
  const allContentRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  useGSAP(() => {
    gsap.from(logoRef.current, { opacity: 0, duration: 1 });
    gsap.from(searchFormRef.current, { x: -50, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(dropdownRef.current, { y: -20, opacity: 0, duration: 1, delay: 1 });
    gsap.from(allContentRef.current, { scale: 0.8, opacity: 0, duration: 1, delay: 1.5 });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    gsap.to(mobileMenuButtonRef.current, {
      rotation: isMobileMenuOpen ? 0 : 90,
      duration: 0.5,
    });
  };

  return (
    <nav className="relative w-full h-[30vh] bg-cover bg-center featured-bg-image z-20" ref={containerRef}>
      <div className="container mx-auto flex justify-between items-start h-full px-4">
        <div ref={logoRef}>
          <Logo />
        </div>
        <div className="hidden md:flex items-start space-x-4 mt-3 sticky top-0 bg-black bg-opacity-40 p-5">
          <div ref={searchFormRef}>
            <SearchForm articles={articles} />
          </div>
          <Link to="/articles">
            <button ref={allContentRef} className="text-white mt-1 font-bold">ALL CONTENT</button>
          </Link>
          <div ref={dropdownRef}>
            <Dropdown articles={articles} />
          </div>
        </div>
        <button
          className="md:hidden text-white sticky top-0 mt-3 bg-black bg-opacity-40 p-5"
          onClick={toggleMobileMenu}
          ref={mobileMenuButtonRef}
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
