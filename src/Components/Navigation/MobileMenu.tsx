import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import Dropdown from "./Dropdown";

const MobileMenu = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  articles,
}: any) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-black text-white z-30 transition-transform transform ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden`}
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
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
