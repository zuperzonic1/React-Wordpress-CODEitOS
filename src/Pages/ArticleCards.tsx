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
}

const ArticleCards: React.FC<ArticleCardsProps> = ({ articles }) => {
  return (
    <main className="p-4 mx-auto max-w-7xl">
      <div className="bg-white shadow mb-4 py-4 px-8 rounded-lg">
        <h1 className="text-3xl font-bold">Article Card</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg"
          >
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-800 mb-1">
                <strong>Published on:</strong> {article.publishedDate}
              </p>
              <Interweave content={article.excerpt} className="mb-4" />
              <Link
                to={`/articles/${article.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                Read full article
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ArticleCards;
