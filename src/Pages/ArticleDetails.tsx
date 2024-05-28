import { useParams } from "react-router-dom";
import { Interweave } from "interweave";

interface Article {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  modified: string;
  publishedDate: string;
  publisher: string;
  categories: string;
  tags: string;
  content: string;
  articleUrl: string;
}

interface ArticleDetailsProps {
  articles: Article[];
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ articles }) => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find((a) => `${a.id}` === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <main className="p-4 mx-auto max-w-7xl">
      <div className="bg-white shadow mb-4 py-4 px-8 rounded-lg">
        <h1 className="text-3xl font-bold">Article Details</h1>
      </div>
      <div className="mb-5 p-4 bg-white border border-gray-200 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full max-w-4xl h-auto mb-4 rounded"
          />
        )}
        <div className="text-sm text-gray-800 mb-2">
          <strong>Wordpress Published on:</strong> {article.date}
        </div>
        <div className="text-sm text-gray-800 mb-2">
          <strong>Wordpress Last Modified:</strong> {article.modified}
        </div>
        <div className="text-sm text-gray-800 mb-2">
          <strong>Article Published Date:</strong> {article.publishedDate}
        </div>
        <div className="text-sm text-gray-800 mb-2">
          <strong>Publisher:</strong> {article.publisher}
        </div>
        <div className="text-sm text-gray-800 mb-2">
          <strong>Categories:</strong> {article.categories}
        </div>
        <div className="text-sm text-gray-800 mb-4">
          <strong>Tags:</strong> {article.tags}
        </div>
        <Interweave
          content={article.content}
          className="prose max-w-none mb-4"
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          <a
            href={article.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Full Article
          </a>
        </button>
      </div>
    </main>
  );
};

export default ArticleDetails;
