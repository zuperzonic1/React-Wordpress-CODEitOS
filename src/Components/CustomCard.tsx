import { Link } from "react-router-dom";
import { Interweave } from "interweave";
import { Article } from "./types";
import clockIcon from "/clock-icon.svg"

interface CustomCardProps {
  articles: Article[];
  articleId: number;
}

const CustomCard: React.FC<CustomCardProps> = ({ articles, articleId }) => {
  const article = articles.find((article) => article.id === articleId);

  
  if (!article) {
    return (
      <div className="flex justify-center items-center p-4 mx-auto max-w-7xl h-full">
        <div
          className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-Orange border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >
            Loading...
          </span>
        </div>
      </div>
    );
  }

  const shorterExcerpt = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const calculateReadTime = (text: string) => {
    const wordsPerMinute = 250;
    const wordCount = text.split(" ").length;
    return Math.ceil(wordCount / wordsPerMinute);
  }
  const readTime = calculateReadTime(article.content);

  const handleReadMoreClick = () => {
    const articleImageElement = document.getElementById('article-image');
    if (articleImageElement) {
      articleImageElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="bg-black bg-opacity-40 text-white border border-orange-600 rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="h-48 w-full object-cover svg-icon-clock"
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-sm text-gray-400 mb-2">
          <strong>Published on:</strong> {article.date}
        </p>
        <div className="text-sm text-gray-400 mb-2">
          <img src={clockIcon} alt="Clock Icon" className="inline-block h-4 w-4 mr-1" />
          <strong>{readTime} Mins</strong>
        </div>
        <div className="text-gray-300 mb-4 flex-grow">
          <Interweave content={shorterExcerpt(article.excerpt, 20)} />
        </div>
        <div className="mt-auto">
          <Link
            to={`/articles/${article.id}`}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleReadMoreClick}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
