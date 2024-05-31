import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="mb-8">The page you are looking for does not exist.</p>
    <Link to="/" className="bg-orange-500 hover:bg-Orange text-white font-bold py-2 px-4 rounded">
      Go Home
    </Link>
  </div>
  );
};

export default NotFoundPage;
