import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-start sticky top-0 mt-3 bg-black bg-opacity-40 p-5">
      <Link to="/">
        <img src="/logo.svg" alt="Logo" className="h-12" />
      </Link>
    </div>
  );
};

export default Logo;
