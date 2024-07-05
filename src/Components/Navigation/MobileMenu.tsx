import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SearchForm from "./SearchForm";
import Dropdown from "./Dropdown";
import { Article } from "../types";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  articles: Article[];
}

const MobileMenu = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  articles,
}: MobileMenuProps) => {
  const menuRef = useRef(null);

  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5 });
    } else {
      gsap.to(menuRef.current, { x: "-100%", duration: 0.5 });
    }
  }, [isMobileMenuOpen]);

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 left-0 w-65 h-full bg-black text-white z-30 transition-transform transform md:hidden`}
      style={{ transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)" }}
    >
      <div className="p-4">
        <button className="text-white mb-4" onClick={toggleMobileMenu}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <SearchForm articles={articles} />
        <Link to="/articles" className="block mb-2">
          <button className="text-white font-bold mt-4">CONTENT</button>
        </Link>
        <div className="relative">
          <Dropdown articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
