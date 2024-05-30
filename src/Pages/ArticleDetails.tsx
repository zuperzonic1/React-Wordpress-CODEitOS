import { useParams } from 'react-router-dom';
import { Interweave } from 'interweave';
import HighlightCode from '../Components/HighlightCode';

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
    <main className="p-4 mx-auto max-w-7xl text-white">
      <header className="py-4">
        <h1 className="text-4xl font-bold">{article.title}</h1>
      </header>
      {article.imageUrl && (
        <div className="my-4">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto rounded"
          />
        </div>
      )}
      <article className="prose prose-invert max-w-none">
        <p className="text-lg mb-4">
          <strong>Published on:</strong> {article.date}
        </p>
        <p className="text-lg mb-4">
          <strong>Last Modified:</strong> {article.modified}
        </p>
        <p className="text-lg mb-4">
          <strong>Article Published Date:</strong> {article.publishedDate}
        </p>
        <p className="text-lg mb-4">
          <strong>Publisher:</strong> {article.publisher}
        </p>
        <p className="text-lg mb-4">
          <strong>Categories:</strong> {article.categories}
        </p>
        <p className="text-lg mb-4">
          <strong>Tags:</strong> {article.tags}
        </p>
        <Interweave content={article.content} />
        <HighlightCode />
      </article>
    </main>
  );
};

export default ArticleDetails;
