import { Link } from "react-router-dom";
import { Interweave } from "interweave";

interface Article {
  id: number;
  imageUrl: string;
  title: string;
  publishedDate: string;
  excerpt: string;
}

interface ArticleCardsProps {
  articles: Article[];
  articleId: number;
}

const CustomCard: React.FC<ArticleCardsProps> = ({ articles, articleId }) => {
  const article = articles.find((article) => article.id === articleId);

  if (!article) {
    return (
      <div className="p-4 mx-auto max-w-7xl">
        <div className="bg-white shadow mb-4 py-4 px-8 rounded-lg">
          <h1 className="text-3xl font-bold">Article Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white border border-gray-800 rounded-lg overflow-hidden shadow-lg max-w-lg mx-auto">
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
          className="bg-Orange hover:bg-Orange text-white font-bold py-2 px-4 rounded"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CustomCard;
