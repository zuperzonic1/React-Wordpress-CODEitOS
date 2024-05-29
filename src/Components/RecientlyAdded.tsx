import { Link } from "react-router-dom";
import { Interweave } from "interweave";

interface Article {
  id: number;
  imageUrl: string;
  title: string;
  publishedDate: string;
  excerpt: string;
}

interface RecentlyAddedProps {
  articles: Article[];
}

const RecentlyAdded: React.FC<RecentlyAddedProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <div
          key={article.id}
          className="bg-black text-white border border-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
          {article.imageUrl && (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="h-48 w-full object-cover"
            />
          )}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-400 mb-2">
              <strong>Published on:</strong> {article.publishedDate}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              <strong>By:</strong> Micheal Felobes {/* Replace with actual author */}
            </p>
            <div className="text-gray-300 mb-4">
              <Interweave content={article.excerpt} />
            </div>
            <Link
              to={`/articles/${article.id}`}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentlyAdded;
