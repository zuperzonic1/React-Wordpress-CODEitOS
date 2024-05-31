import { Link } from "react-router-dom";
import { Article } from "../types";

const SearchCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="flex items-center p-2 border rounded-lg border-Orange">
      <div className="w-20 h-auto flex-shrink-0">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <Link to={`/articles/${article.id}`} className="block text-white hover:bg-gray-700 p-2 rounded flex-1">
        <h2 className="text-lg font-bold">{article.title}</h2>
        <p className="text-sm text-gray-400">{article.publishedDate}</p>
      </Link>
    </div>
  );
};

export default SearchCard;
